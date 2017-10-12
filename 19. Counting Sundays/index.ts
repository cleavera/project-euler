import { $perf } from '../shared';

$perf(() => {
    const start = '1901-01-01';
    const end = '2000-12-31';

    const startDate = new Date(start);
    const endDate = new Date(end);

    let counter: number = 0;

    while(startDate.getTime() < endDate.getTime()) {
        if (startDate.getDay() === 0) {
            counter++;
        }

        startDate.setMonth(startDate.getMonth() + 1);
    }

    console.log(counter);
});
