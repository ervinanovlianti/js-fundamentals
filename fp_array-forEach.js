// Cara Imperatif (tradisional)
const names = ['1', '2', '3', '4'];

for (let i = 0; i < names.length; i++) {
    console.log(`Hello, ${names[i]}!`);
}

// Cara deklaratif
const names2 = ['Harry', 'Ron', 'Jeff', 'Thomas'];

names2.forEach((name) => {
    console.log(`Hello, ${name}!`);
});