// mengubah attribute contacts pada class mail menjadi tidak bisa diakses di luar class atau oleh object yang menjadi instansiasi class tsb
/** 
cara 1, menggunakan var (hanya dapat digunakan pada penulisan kelas menggunakan statement `function`)
**/
// var contacts = [];
// contoh
function Mail() {
    this.from = 'pengirim@dicoding.com';
    var contacts = [];
}

/**
cara 2, cara ini dapat digunakan pada penulisan kelas menggunakan statement `function` dan `class`
**/
// this._contacts = []
// contoh
class Mail {
    constructor() {
        this._contacts = [];
        this.from = 'pengirim@dicoding.com';
    }
}

/** 
cara 3, menambahkan prefix # , cara ini dapat digunakan pada penulisan kelas menggunakan statement `class` saja 
hanya saja cara ini belum sepenuhnya didukung oleh js engine versi lama
  **/
// #contacts = [];
// contoh
class Mail {
    #contacts = [];
    constructor() {
        this.from = 'pengirim@dicoding.com';
    }
}