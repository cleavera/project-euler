import * as fs from 'fs';
import * as path from 'path';
import { $answer, $perf } from '../shared';
import { Game } from './classes/game';
import { Player } from './classes/player';

$perf(async(): Promise<void> => {
    const winners = {
        [Player.ONE]: 0,
        [Player.TWO]: 0
    };

    const data: Array<string> = await getData();

    data.forEach((game: string) => {
        if (game) {
            winners[Game.FromString(game).winner()]++;
        }
    });

    $answer(`Player one: ${winners[Player.ONE]}, Player two: ${winners[Player.TWO]}`);

    async function getData(): Promise<Array<string>> {
        return new Promise<Array<string>>((resolve, reject) => {
            fs.readFile(path.join(__dirname, './poker.txt'), (err: NodeJS.ErrnoException, data: Buffer) => {
                if (err) {
                    reject(err);

                    return;
                }

                resolve(data.toString().split('\n'));
            });
        });
    }
});
