// Immutable berarti sebuah objek tidak boleh diubah setelah objek tersebut dibuat.

const names = ['Er', 'vina', 'Novlianti'];

const newNames = names.map((name) => `${name}`);

console.log({
    names,
    newNames
});

// dari code diatas hasilnya sama

// Namun ketika kita ingin perlu mengubah nilai dari sebuah objek maka codenya seperti berikut ini :
const user = {
    firsName : 'Ervina',
    lastName : 'Nov',
}
const renameLastNameUser = (newLastName, user) => {
    user.lastName = newLastName;
}
renameLastNameUser('Novlianti', user); //mengubah lastName user

console.log(user);

// penggunaan array.map()
// penerapan functional programming
const user2 = {
    firsName: 'Vina',
    lastName: 'Nov',
}
const createUserWithNewLastName = (newLastName, user) => {
    return {
        ...user,
        lastName: newLastName
    }
}

const newUser = createUserWithNewLastName('Novlianti', user);

console.log(newUser);
