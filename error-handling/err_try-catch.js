// try {
//     console.log("Awal blok try"); // (1)
//     errorCode; // (2) Error disini
//     console.log("Akhir blok try"); // (3) maka blok ini tidak akan dieksekusi, kemudian beralih ke blok catch
// } catch (error) {
//     console.log("Terjadi error!"); // (4)
//     // Detail Informasi error
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error.stack);
// }

// let json = '{ "name": "Yoda", "age": 20 }';
// let json = '{ bad json }';
let json = '{"name" : "Ervina", "age" : 20}';

try {
    let user = JSON.parse(json);
    // Penggunaan throw
    if (!user.name) {
        throw new SyntaxError("'name' is required.");
    }

    errorCode;

    console.log(user.name);
    console.log(user.age);
} catch (error) {
    // If statement untuk mengatasi error berdasarkan kondisi
    if (error instanceof SyntaxError) {
        console.log(`JSON Error: ${error.message}`);
    } else if (error instanceof ReferenceError) {
        console.log(error.message);
    } else {
        console.log(error.stack);
    }

}