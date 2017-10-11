import { GRID } from './grid';
import { $perf } from '../shared';

$perf(() => {
    const adjacentNumbers = 4;
    const modLimit = adjacentNumbers - 1;

    const grid = GRID.split(/\r\n?|\n/).map((row: string) => {
        return row.split(/\s/).map((value: string) => {
            return parseInt(value, 10);
        });
    });

    let best: number = 0;
    let value: number;

    for (let y: number = 0; y < grid.length; y++) {
        const row = grid[y];

        for (let x: number = 0; x < row.length; x++) {
            const canGoDown = (y + modLimit) < grid.length;
            const canGoRight = (x + modLimit) < row.length;
            const canGoLeft = (x - modLimit) >= 0;

            if (canGoDown) {
                value = multiply(grid, [x, y], [x, y + modLimit]);

                if (value > best) {
                    best = value;
                }

                if (canGoLeft) {
                    value = multiply(grid, [x, y], [x - modLimit, y + modLimit]);

                    if (value > best) {
                        best = value;
                    }
                }

                if (canGoRight) {
                    value = multiply(grid, [x, y], [x + modLimit, y + modLimit]);

                    if (value > best) {
                        best = value;
                    }
                }
            } else if (canGoRight) {
                value = multiply(grid, [x, y], [x + modLimit, y]);

                if (value > best) {
                    best = value;
                }
            }
        }
    }

    console.log(best);

    function multiply(grid: Array<Array<number>>, start: [number, number], end: [number, number]): number {
        let x: number = start[0];
        let y: number = start[1];

        let total: number = grid[y][x];

        while (x !== end[0] || y !== end[1]) {
            if (x > end[0]) {
                x--;
            } else if (x < end[0]) {
                x++;
            }

            if (y > end[1]) {
                y--;
            } else if (y < end[1]) {
                y++;
            }

            total *= grid[y][x];
        }

        return total;
    }
});
