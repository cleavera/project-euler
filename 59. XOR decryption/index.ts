import { $readFile } from '@cleavera/fs';
import { $nLengthArrayCombinations } from '@cleavera/utils';
import { join } from 'path';
import { $answer, $perf } from '../shared';

$perf(async() => {
    const keyLength: number = 3;
    const lowerAsciiLimit: number = 'a'.charCodeAt(0);
    const upperAsciiLimit: number = 'z'.charCodeAt(0);

    let sum: number = 0;

    const cipher: Array<number> = (await $readFile(join(__dirname, './cipher.txt'))).split(',').map((key: string) => {
        return parseInt(key);
    });

    for (let key of $nLengthArrayCombinations(() => charGenerator(lowerAsciiLimit, upperAsciiLimit), keyLength)) {
        for (let i: number = 0; i < cipher.length; i++) {
            const cipherByte: number = cipher[i];
            const keyByte: number = key[i % keyLength];

            const decodedByte: number = cipherByte ^ keyByte;
            sum += decodedByte;

            if (!isEnglishLetter(decodedByte)) {
                sum = 0;

                break;
            }
        }

        if (sum) {
            break;
        }
    }

    $answer(sum);
});

function isEnglishLetter(asciiCode: number): boolean {
    return Array.from('~`{}').map((x: string) => x.charCodeAt(0)).indexOf(asciiCode) === -1;
}

function* charGenerator(lowerLimit: number, upperLimit: number): IterableIterator<number> {
    for (let x: number = lowerLimit; x <= upperLimit; x++) {
        yield x;
    }
}
