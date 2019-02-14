export function $gcd<T extends number | bigint = number>(a: T, b: T): T {
    let c: T = a % b as T;

    while (c > 0) {
        a = b;
        b = c;
        c = a % b as T;
    }

    return b;
}
