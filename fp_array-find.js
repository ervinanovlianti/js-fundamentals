const students = [{
        name: 'Harry',
        score: 60,
    },
    {
        name: 'James',
        score: 88,
    },
    {
        name: 'Ron',
        score: 90,
    },
    {
        name: 'Bethy',
        score: 75,
    }
];

// mengecek apakah ada student dengan kriteria berikut
const checkJames = students.some(student => student.name === 'James');
// mencari apakah ada student dengan kriteria demikian, jika ada tampilkan
const findJames = students.find(student => student.name === 'James');

const checkErvina = students.some(student => student.name === 'Ervina');
const findErvina = students.find(student => student.name === 'Ervina');

if (checkJames) {
    console.log("Siswa Ditemukan");
}else{
    console.log("Siswa Tidak Ditemukan");
}

// console.log(checkJames);
console.log(findJames);

console.log(checkErvina);
console.log(findErvina);