import { $reverseString } from './reverse-string';

export function $isPalindrome(str: string): boolean {
    return str === $reverseString(str);
}