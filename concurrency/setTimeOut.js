// asynchronous
console.log("Selamat datang!"); // kode pertama dieksekusi

// menunggu selama 3 detik sebalum mengaksekusi kodenya
setTimeout(() => {
    console.log("Terima kasih sudah mampir, silakan datang kembali!");
}, 3000);
console.log("Ada yang bisa dibantu?"); //dieksekusi kedua