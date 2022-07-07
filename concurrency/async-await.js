const getCoffee = () => {
    return new Promise((resolve, reject) => {
        const seeds = 100;
        setTimeout(() => {
            if (seeds >= 10) {
                resolve("Kopi didapatkan!");
            } else {
                reject("Biji kopi habis!");
            }
        }, 1000);
    })
}
// penulisan async dengan gaya sync
// kode ini hanya menghandle jika promise fullFilled (terpenuhi)
async function makeCoffee () {
    const coffee = await getCoffee();
    console.log(coffee);
}

makeCoffee();

// Async-await handle onRejected, jika promis tidak terpenuhi
async function makeCoffee2 () {
    try {
        const coffee2 = await getCoffee();
        console.log(coffee2)
    } catch (rejectedReason) {
        console.log(rejectedReason);
    }
}
makeCoffee2();

