import * as fs from 'fs';
import * as path from 'path';
import { $perf } from '../shared';

$perf(async (): Promise<void> => {
    const data: Array<string> = await getData();

    console.log(data.reduce((total: number, name: string, index: number) => {
        return total + (name.split('').reduce((count: number, char: string) => {
            return count + (parseInt(char, 36) - 9);
        }, 0) * (index + 1));
    }, 0));

    async function getData(): Promise<Array<string>> {
        return new Promise<Array<string>>((resolve, reject) => {
            fs.readFile(path.join(__dirname, './names.txt'), (err: NodeJS.ErrnoException, data: Buffer) => {
                if (err) {
                    reject(err);

                    return;
                }

                resolve(JSON.parse(`[${data.toString()}]`).sort());
            });
        });
    }
});