const shoes = [{
        merk: 'New era',
        price: 600,
    },
    {
        merk: 'Ando',
        price: 200,
    },
    {
        merk: 'Wolfes',
        price: 900,
    }
];

const totalPrice = shoes.reduce((sum, shoe) => sum + shoe.price, 0, 0);


console.log(totalPrice);

// Note :
// Reduce => nilai hasil kalkulasi pada elemen sebelumnya digunakan untuk melakukan kalkulasi pada elemen berikutnya.