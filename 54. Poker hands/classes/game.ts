import { $forEach } from '../../shared';
import { Card } from './card';
import { Hand } from './hand';
import { Player } from './player';

export class Game {
    public [Player.ONE]: Hand;
    public [Player.TWO]: Hand;

    constructor(hand1: Hand, hand2: Hand) {
        this[Player.ONE] = hand1.sort(Game._handSorter);

        this[Player.TWO] = hand2.sort(Game._handSorter);
    }

    public winner(): Player {
        const p1SF = Game.checkStraighFlush(this[Player.ONE]);
        const p2SF = Game.checkStraighFlush(this[Player.TWO]);

        if (p1SF > p2SF) {
            return Player.ONE;
        } else if (p2SF > p1SF) {
            return Player.TWO;
        }

        const p14OK = Game.checkFourOfAKind(this[Player.ONE]);
        const p24OK = Game.checkFourOfAKind(this[Player.TWO]);

        if (p14OK > p24OK) {
            return Player.ONE;
        } else if (p24OK > p14OK) {
            return Player.TWO;
        }

        const p1FH = Game.checkFullHouse(this[Player.ONE]);
        const p2FH = Game.checkFullHouse(this[Player.TWO]);

        if (p1FH > p2FH) {
            return Player.ONE;
        } else if (p2FH > p1FH) {
            return Player.TWO;
        }

        const p1F = Game.checkFlush(this[Player.ONE]);
        const p2F = Game.checkFlush(this[Player.TWO]);

        if (p1F > p2F) {
            return Player.ONE;
        } else if (p2F > p1F) {
            return Player.TWO;
        }

        const p1S = Game.checkStraight(this[Player.ONE]);
        const p2S = Game.checkStraight(this[Player.TWO]);

        if (p1S > p2S) {
            return Player.ONE;
        } else if (p2S > p1S) {
            return Player.TWO;
        }

        const p13OK = Game.checkThreeOfAKind(this[Player.ONE]);
        const p23OK = Game.checkThreeOfAKind(this[Player.TWO]);

        if (p13OK > p23OK) {
            return Player.ONE;
        } else if (p23OK > p13OK) {
            return Player.TWO;
        }

        const p12p = Game.checkTwoPair(this[Player.ONE]);
        const p22p = Game.checkTwoPair(this[Player.TWO]);

        if (p12p > p22p) {
            return Player.ONE;
        } else if (p22p > p12p) {
            return Player.TWO;
        }

        const p1p = Game.checkPair(this[Player.ONE]);
        const p2p = Game.checkPair(this[Player.TWO]);

        if (p1p > p2p) {
            return Player.ONE;
        } else if (p2p > p1p) {
            return Player.TWO;
        }

        const p1HC = Game.checkHighCard(this[Player.ONE]);
        const p2HC = Game.checkHighCard(this[Player.TWO]);

        if (p1HC > p2HC) {
            return Player.ONE;
        }

        return Player.TWO;
    }

    private static checkStraighFlush(hand: Hand): number {
        if (this.checkFlush(hand)) {
            return this.checkStraight(hand);
        }

        return 0;
    }

    private static checkFlush(hand: Hand): number {
        let highestValue = hand[0].value;
        let suit = hand[0].suit;

        $forEach(hand, (card: Card): boolean | void => {
            if (suit !== card.suit) {
                highestValue = 0;
                return true;
            }
        });

        return highestValue;
    }

    private static checkStraight(hand: Hand): number {
        let highestValue = hand[0].value;

        $forEach(hand, (card: Card, index: number): boolean | void => {
            if ((highestValue - index) !== card.value) {
                highestValue = 0;
                return true;
            }
        });

        return highestValue;
    }

    private static checkFourOfAKind(hand: Hand): number {
        const analysis = this.analyseHand(hand);

        if(analysis[hand[0].value] === 4) {
            return (hand[0].value * 13) + hand[4].value;
        } else if (analysis[hand[1].value] === 4) {
            return (hand[1].value * 13) + hand[0].value;
        }

        return 0;
    }

    private static checkFullHouse(hand: Hand): number {
        const analysis = this.analyseHand(hand);

        const keys = Object.keys(analysis);

        if (keys.length !== 2) {
            return 0;
        }

        if (!(analysis[keys[0]] === 3 || analysis[keys[0]] === 2)) {
            return 0;
        }

        if (analysis[keys[0]] === 3) {
            return (parseInt(keys[0], 10) * 13) + parseInt(keys[1], 10);
        } else {
            return (parseInt(keys[1], 10) * 13) + parseInt(keys[0], 10);
        }
    }

    private static checkThreeOfAKind(hand: Hand): number {
        const analysis = this.analyseHand(hand);
        const keys = Object.keys(analysis);

        if (keys.length !== 3) {
            return 0;
        }

        let tok: number | null = null;
        let others: Array<number> = [];

        $forEach(keys, (key: string) => {
            if (analysis[key] === 3) {
                tok = parseInt(key, 10);
            } else {
                others.push(parseInt(key, 10));
            }
        });

        if (!tok) {
            return 0;
        }

        others.sort();

        return (tok * (13 * 13)) + (others[0] * 13) + others[1];
    }

    private static checkTwoPair(hand: Hand): number {
        const analysis = this.analyseHand(hand);
        const keys = Object.keys(analysis);

        if (keys.length !== 3) {
            return 0;
        }

        let pairs: Array<number> = [];
        let other: number = 0;

        $forEach(keys, (key: string) => {
            if (analysis[key] === 2) {
                pairs.push(parseInt(key, 10));
            } else {
                other = parseInt(key, 10);
            }
        });

        if (!pairs.length) {
            return 0;
        }

        pairs.sort();

        return (pairs[0] * (13 * 13)) + (pairs[1] * 13) + other;
    }

    private static checkPair(hand: Hand): number {
        const analysis = this.analyseHand(hand);
        const keys = Object.keys(analysis);

        if (keys.length !== 4) {
            return 0;
        }

        let pair: number = 0;
        let others: Array<number> = [];

        $forEach(keys, (key: string) => {
            if (analysis[key] === 2) {
                pair = parseInt(key, 10);
            } else {
                others.push(parseInt(key, 10));
            }
        });

        others.sort();

        return (pair * (13 * 13 * 13)) + (others[0] * 13 * 13) + (others[1] * 13) + others[2];
    }

    private static checkHighCard(hand: Hand): number {
        return hand[0].value;
    }

    private static analyseHand(hand: Hand): { [value: string]: number } {
        const analysis: { [value: string]: number } = {};

        $forEach(hand, (card: Card) => {
            if (!(card.value in analysis)) {
                analysis[card.value] = 0;
            }

            analysis[card.value]++;
        });

        return analysis;
    }

    public static FromString(game: string): Game {
        const cards = game.split(' ').map((card: string) => {
            return Card.FromString(card);
        });

        return new Game(cards.slice(0, 5) as Hand, cards.slice(5, 10) as Hand)
    }

    private static _handSorter(card1: Card, card2: Card): number {
        if (card1.value > card2.value) {
            return -1;
        }

        if (card1.value < card2.value) {
            return 1;
        }

        return 0;
    }
}
