import { $isEven, $perf } from '../shared';

$perf(() => {
    const limit = 1E6;

    let largestChainLength: number = 0;
    let largestChainLengthStart: number = 1;

    for(let x = 1; x <= limit; x++) {
        let chainLength: number = 0;

        let pointer: number = x;

        while(pointer !== 1) {
            pointer = $isEven(pointer) ? (pointer / 2) : ((3 * pointer) + 1);
            chainLength++;
        }

        if (chainLength > largestChainLength) {
            largestChainLength = chainLength;
            largestChainLengthStart = x;
        }
    }

    console.log(largestChainLengthStart, largestChainLength);
});
