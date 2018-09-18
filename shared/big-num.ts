import { $digits } from './digits';

export class $BigNum {
    public readonly digitArray: Array<number>;

    constructor(digitArray: Array<number> = [1]) {
        this.digitArray = digitArray.slice();
    }

    public multiply(multiple: number) {
        let finalCarry: number = this.digitArray.reduce<number>((carry: number, digit: number, index: number) => {
            const product = (digit * multiple) + carry;

            const [newCarry, newDigit] = (product / 10).toString().split('.');

            this.digitArray[index] = parseInt(newDigit || '0', 10);

            return parseInt(newCarry || '0', 10);
        }, 0);

        if (finalCarry) {
            while (finalCarry > 0) {
                const [newCarry, newDigit] = (finalCarry / 10).toString().split('.');

                finalCarry = parseInt(newCarry || '0', 10);

                this.digitArray.push(parseInt(newDigit || '0', 10));
            }
        }
    }

    public add(otherNumber: $BigNum) {
        $BigNum.addNumbers(this, otherNumber, this);
    }

    public clone(): $BigNum {
        return new $BigNum(this.digitArray);
    }

    public toString(): string {
        let out = '';

        for (let x = this.digitArray.length - 1; x >= 0; x--) {
            out += this.digitArray[x].toString();
        }

        return out;
    }

    public static fromNumber(n: number): $BigNum {
        return new $BigNum($digits(n).reverse());
    }

    private static addNumbers(first: $BigNum, second: $BigNum, result: $BigNum): void {
        let lhs: $BigNum = first.clone();
        let rhs: $BigNum = second.clone();

        if (lhs.digitArray.length < rhs.digitArray.length) {
            [lhs, rhs] = [rhs, lhs];
        }

        let finalCarry: number = lhs.digitArray.reduce<number>((carry: number, digit: number, index: number) => {
            const sum = (digit + (rhs.digitArray[index] || 0)) + carry;

            const [newCarry, newDigit] = (sum / 10).toString().split('.');

            result.digitArray[index] = parseInt(newDigit || '0', 10);

            return parseInt(newCarry || '0', 10);
        }, 0);

        if (finalCarry) {
            while (finalCarry > 0) {
                const [newCarry, newDigit] = (finalCarry / 10).toString().split('.');

                finalCarry = parseInt(newCarry || '0', 10);

                result.digitArray.push(parseInt(newDigit || '0', 10));
            }
        }
    }
}