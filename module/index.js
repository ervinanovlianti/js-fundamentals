// const coffeeStock = require('./state');

// const makeCoffee = (type, miligrams) => {
//     if (coffeeStock[type] >= miligrams) {
//         console.log("Kopi berhasil dibuat!");
//     } else {
//         console.log("Biji kopi habis!");
//     }
// }

// console.log(coffeeStock)

// makeCoffee("robusta", 80);

// ---Using Module ES6---
import coffeeStock from './state.js';

const displayStock = stock => {
    for (const type in stock) {
        console.log(type);
    }
}

displayStock(coffeeStock);