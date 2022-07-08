import _ from 'lodash';

// ------- Cara Pertama ------
// const array = [1,2,3,4,5] ;
// let sum = 0;

// for (let i = 0; i < array.length; i++) {
//     sum += array[i];
    
// }
// console.log(sum)

// ------ Cara Kedua dengan fungsi reduce------
// const myArray = [1, 2, 3, 4, 5];
// let sum = myArray.reduce((prev, curr) => {
//     return prev + curr;
// });

// console.log(sum);

// Dengan bantuan package lodash
const newArray = [1,2,3,4,5];
const jumlah = _.sum(newArray);

console.log(jumlah);