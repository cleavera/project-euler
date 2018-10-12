import { Suit } from './suit';

export class Card {
    constructor(public suit: Suit, public value: number) {}

    public static FromString([number, suit]: string): Card {
        if (!this.checkSuit(suit)) {
            throw new Error(`Not valid suit ${number}${suit}`);
        }

        return new Card(suit, this.parseValue(number));
    }

    private static checkSuit(suit: string): suit is Suit {
        return suit === Suit.DIAMONDS
            || suit === Suit.SPADES
            || suit === Suit.CLUBS
            || suit === Suit.HEARTS;
    }

    private static parseValue(num: string): number {
        if (num === 'A') {
            return 14;
        }

        if (num === 'K') {
            return 13;
        }

        if (num === 'Q') {
            return 12;
        }

        if (num === 'J') {
            return 11;
        }

        if (num === 'T') {
            return 10;
        }

        const n = parseInt(num, 10);

        if (n > 9) {
            throw new Error(`Invalid value ${n}`);
        }

        return n;
    }
}