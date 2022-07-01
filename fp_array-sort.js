const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// output: [ 'Dec', 'Feb', 'Jan', 'March' ]

const array1 = [1, 30, 4, 1000, 101, 121];
array1.sort();
console.log(array1);
// output: [ 1, 1000, 101, 121, 30, 4 ]

// mengurutkan dari yang terkecil
const compareNumber = (a, b) => {
    return a - b;
};
const sorting = array1.sort(compareNumber);
console.log(sorting);
// output : [ 1, 4, 30, 101, 121, 1000 ]