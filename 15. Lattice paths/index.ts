import { $perf } from '../shared';

/**
 * There is definitely an easy way of doing this
 */

$perf(() => {
    const gridSize = 20;

    function traverse(squaresRight: number, squaresDown: number): number {
        if (squaresRight === 0 || squaresDown === 0) {
            return 1;
        }

        return traverse(squaresRight - 1, squaresDown) + traverse(squaresRight, squaresDown - 1);
    }

    console.log(traverse(gridSize - 1, gridSize) * 2);
});
