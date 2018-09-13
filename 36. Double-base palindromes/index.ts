import { $perf } from '../shared';
import { $isPalindrome } from '../shared/is-palindrome';

$perf(() => {
    const limit = 1e6;
    let sum: number = 0;

    for (let x = 0; x < limit; x++) {
        if ($isPalindrome(x.toString(10)) && $isPalindrome(x.toString(2))) {
            sum += x;
        }
    }

    console.log(sum);
});
