import { $isInteger } from './is-integer';

export function $isSquareNumber(n: number): boolean {
    return $isInteger(Math.sqrt(n));
}
