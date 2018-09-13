export function $digits(x: number): Array<number> {
    return x.toString(10).split('').map((d: string): number => {
        return parseInt(d, 10);
    });
}