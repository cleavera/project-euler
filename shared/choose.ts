export function $choose<T = any>(items: Array<T>, cb: (reorderedArray: Array<T>) => void): void {
    choose(items.slice(), cb);

    function choose(items: Array<T>, cb: (reorderedArray: Array<T>) => void, reordered: Array<T> = []): void {
        if (!items.length) {
            cb(reordered);

            return;
        }

        for (let x: number = 0; x < items.length; x++) {
            const newReordered = reordered.slice();
            newReordered.push(items[x]);

            const clone = items.slice();
            clone.splice(x, 1);

            choose(
                clone,
                cb,
                newReordered
            )
        }
    }
}
