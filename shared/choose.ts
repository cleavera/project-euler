export function $choose<T = any>(items: Array<T>, cb: (reorderedArray: Array<T>) => void, limit: number = items.length): void {
    choose(items.slice(), cb, limit);

    function choose(items: Array<T>, cb: (reorderedArray: Array<T>) => void, depth: number, reordered: Array<T> = []): void {
        if (!depth) {
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
                depth - 1,
                newReordered
            )
        }
    }
}
