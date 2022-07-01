// impure function
const createPersonWithAge = (age, person) => {
    person.age = age;
    return person;
};

const person = {
    name : 'Ervina'
};

const newPerson = createPersonWithAge(18, person);

console.log({
    person, newPerson
});

// penggunaan pure function
const createPersonWithAge2 = (age, person) => {
    return { ...person, age};
};

const person2 = {
    name : 'Ervina'
};

const newPerson2 = createPersonWithAge2(18, person);

console.log({
    person, newPerson
})