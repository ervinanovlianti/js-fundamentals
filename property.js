// cara 1
class Mail {
    constructor() {
        this.from = 'pengirim@dicoding.com'; //property 1
        this.contacts = []; //property 2
        this.yourOtherProperty = 'the values'; //property 3
    }
    // method
    sendMessage(msg, to) {
        console.log(`you send: ${msg} to ${to} from ${this.from}`);
        this.contacts.push(to); // menyimpan kontak baru
    };
}

// cara 2
function Mail() {
    this.from = 'pengirim@dicoding.com';
    this.contacts = [];
    this.yourOtherPrototype = 'the values';
};

Mail.prototype.sendMessage = function (msg, to) {
    console.log(`you send: ${msg} to  ${to} from ${this.from}`);
    this.contacts.push(to); // menyimpan kontak baru
};
