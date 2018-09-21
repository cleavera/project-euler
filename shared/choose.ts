export function $choose<T = any>(items: Array<T>, cb: (reorderedArray: Array<T>) => void, limit: number = items.length, maintainOrder: boolean = true): void {
    choose(items.slice(), cb, limit);

    function choose(items: Array<T>, cb: (reorderedArray: Array<T>) => void, depth: number, reordered: Array<T> = []): void {
        if (!depth) {
            cb(reordered);

            return;
        }

        for (let x: number = 0; x < items.length; x++) {
            const newReordered = reordered.slice();
            newReordered.push(items[x]);

            let clone: Array<T>;

            if (maintainOrder) {
                clone = items.slice();
                clone.splice(x, 1);
            } else {
                clone = items.slice(x);
            }

            choose(
                clone,
                cb,
                depth - 1,
                newReordered
            )
        }
    }
}
