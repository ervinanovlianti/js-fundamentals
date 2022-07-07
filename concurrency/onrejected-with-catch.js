const stock = {
    coffeeBeans: 250,
    water: 1000,
}

const checkStock = () => {
    return new Promise((resolve, reject) => {
        if (stock.coffeeBeans >= 17 && stock.water >= 2500) {
            resolve("Stok cukup. Bisa membuat kopi");
        } else {
            reject("Stok tidak cukup");
        }
    });
};

const handleSuccess = resolvedValue => {
    console.log(resolvedValue);
}
const handleFailure = rejectedReason => {
    console.log(rejectedReason);
}
// metode separation of concern => pemecahan masalah
checkStock()
    .then(handleSuccess)
    // .then(null, handleFailure);
    .catch(handleFailure);