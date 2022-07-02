// filtering nilai array
// mengembalikan nilai dengan tipe data boolean 
// Dimana nilai boolean akan menentukan item array lolos saring atau tidak
const truthyArray = [1, '', 'Hallo', 0, null, undefined, NaN, 001, 'Nama', 14].filter((item) => Boolean(item));
console.log(truthyArray);


// ketika di cek dengan console.log maka hanya akan mengembalikan nilai dalam bentuk array yang lolos saring saja atau yang bernilai truthy
// contoh penerapan array filter dalam pengecekan kelayakan siswa untuk menerima beasiswa berdasarkan nilai skor yang didapat.
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

const eligibleForScholarshipStudents = students.filter((student) => student.score > 85);

console.log(eligibleForScholarshipStudents);
