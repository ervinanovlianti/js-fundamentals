try {
    console.log("Awal blok try"); // (1)
    errorCode; // (2) Error disini
    console.log("Akhir blok try"); // (3) maka blok ini tidak akan dieksekusi, kemudian beralih ke blok catch
} catch (error) {
    console.log("Terjadi error!"); // (4)
    // Detail Informasi error
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}