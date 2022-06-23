// menambahkan sebuah method untuk memeriksa apakah sebuah input adalah nomor handphone:
class Mail {
    static isValidPhone(phone) {
        return typeof phone === 'number';
    }
}
// memanggil fungsi tersebut tanpa membuat instance kelas Mail terlebih dahulu.
Mail.isValidPhone(089000000000) //true