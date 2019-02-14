import { $gcd } from './greatest-common-denominator.helper';

export class $FractionalNumber {
    public numerator: bigint;
    public denomenator: bigint;

    constructor(numerator: bigint, denominator: bigint) {
        const gcd: bigint = $gcd<bigint>(numerator, denominator);
        this.numerator = numerator / gcd;
        this.denomenator = denominator / gcd;
    }

    public static fromString(str: string): $FractionalNumber {
        const parts: [string, string] = str.split('.') as [string, string];

        if (!parts[0]) {
            throw new Error(`${str} is not a number`);
        }

        const numerator: bigint = BigInt(parts[0] + (parts[1] || ''));
        const denominator: bigint = BigInt(10) ** BigInt((parts[1] || '').length);

        return new this(numerator, denominator);
    }

    public static parseInt(str: string): $FractionalNumber {
        const parts: [string, string] = str.split('.') as [string, string];

        if (!parts[0]) {
            throw new Error(`${str} is not a number`);
        }

        const numerator: bigint = BigInt(parts[0]);
        const denominator: bigint = 1n;

        return new this(numerator, denominator);
    }

    public static ten(): $FractionalNumber {
        const two: $FractionalNumber = $FractionalNumber.two();

        return two.multiply(two).multiply(two).add(two);
    }

    public static two(): $FractionalNumber {
        const one: $FractionalNumber = $FractionalNumber.identity();

        return one.add(one);
    }

    public static half(): $FractionalNumber {
        return $FractionalNumber.two().invert();
    }

    public static identity(): $FractionalNumber {
        return this.fromString('1');
    }

    public static nothing(): $FractionalNumber {
        return this.fromString('0');
    }

    public static series(operator: (value: $FractionalNumber) => $FractionalNumber, start: $FractionalNumber = $FractionalNumber.nothing(), limit: $FractionalNumber = $FractionalNumber.fromString('100')): $FractionalNumber {
        start = start.integer();
        limit = limit.integer();

        if (start > limit) {
            [start, limit] = [limit, start];
        }

        let sum: $FractionalNumber = $FractionalNumber.nothing();

        while (start < limit) {
            sum = sum.add(operator(start));
            start = start.increment();
        }

        return sum;
    }

    public static E(precision: number = 100): $FractionalNumber {
        return this.series((num: $FractionalNumber) => {
            return this.identity().divide(num.factorial());
        }, void 0, new this(BigInt(precision), 1n));
    }

    public add(other: $FractionalNumber): $FractionalNumber {
        return new $FractionalNumber((this.numerator * other.denomenator) + (other.numerator * this.denomenator), this.denomenator * other.denomenator);
    }

    public multiply(other: $FractionalNumber): $FractionalNumber {
        return new $FractionalNumber(this.numerator * other.numerator, this.denomenator * other.denomenator);
    }

    public subtract(other: $FractionalNumber): $FractionalNumber {
        return new $FractionalNumber((this.numerator * other.denomenator) - (other.numerator * this.denomenator), this.denomenator * other.denomenator);
    }

    public divide(other: $FractionalNumber): $FractionalNumber {
        return new $FractionalNumber(this.numerator * other.denomenator, this.denomenator * other.numerator);
    }

    public modulus(mod: $FractionalNumber): $FractionalNumber {
        const divisor: $FractionalNumber = this.divide(mod);

        return divisor.subtract(divisor.integer()).multiply(mod);
    }

    public negate(): $FractionalNumber {
        return this.multiply($FractionalNumber.fromString('-1'));
    }

    public increment(): $FractionalNumber {
        return this.add($FractionalNumber.identity());
    }

    public decrement(): $FractionalNumber {
        return this.subtract($FractionalNumber.identity());
    }

    public factorial(): $FractionalNumber {
        let num: $FractionalNumber = this.integer();
        const one: $FractionalNumber =  $FractionalNumber.identity();

        if (num.isEqual($FractionalNumber.nothing())) {
            return one;
        }

        let result: $FractionalNumber = this.integer();

        while (num > one) {
            num = num.decrement();

            result = result.multiply(num);
        }

        return result;
    }

    public invert(): $FractionalNumber {
        return new $FractionalNumber(this.denomenator, this.numerator);
    }

    public integer(): $FractionalNumber {
        return $FractionalNumber.parseInt(this.toString());
    }

    public isEqual(other: $FractionalNumber): boolean {
        return this.toString() === other.toString();
    }

    public toString(radix: number = 10): string {
        return (this.numerator / this.denomenator).toString(radix);
    }

    public valueOf(): number {
        return Number(this.toString());
    }
}
