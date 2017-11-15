import { $perf } from '../shared';

$perf(() => {
   const gridSize = 1001;

   let total: number = 1;
   let counter: number = 1;

   for(let x = 2; x <= ((gridSize + 1) / 2); x++) {
       const increaser = ((x - 1) * 2);

       for (let y = 0; y <= 3; y++){
           counter += increaser;
           total += counter;
       }
   }

   console.log(total);
});