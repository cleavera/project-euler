import * as fs from "fs";
import * as path from "path";
import { $perf } from '../shared';
import { $isTriangleNumber } from '../shared/is-triangle-number';

$perf(async (): Promise<void> => {
    const data: Array<string> = await getData();
    let count: number = 0;

    data.forEach((word: string) => {
        const value = word.split('').reduce((count: number, char: string) => {
            return count + (parseInt(char, 36) - 9);
        }, 0);

        if ($isTriangleNumber(value)) {
            count++;
        }
    });

    console.log(count);

    async function getData(): Promise<Array<string>> {
        return new Promise<Array<string>>((resolve, reject) => {
            fs.readFile(path.join(__dirname, './words.txt'), (err: NodeJS.ErrnoException, data: Buffer) => {
                if (err) {
                    reject(err);

                    return;
                }

                resolve(JSON.parse(`[${data.toString()}]`));
            });
        });
    }
});