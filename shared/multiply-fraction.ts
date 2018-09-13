import { $gcd } from './greatest-common-denominator.helper';

export function $multiplyFraction(fraction1: [number, number], fraction2: [number, number]): [number, number] {
    const numerator = fraction1[0] * fraction2[0];
    const denominator = fraction1[1] * fraction2[1];

    const gcd: number = $gcd(numerator, denominator);

    return [numerator / gcd, denominator / gcd];
}
