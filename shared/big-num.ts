export class $BigNum {
    public readonly digitArray: Array<number>;

    constructor() {
        this.digitArray = [1];
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
}