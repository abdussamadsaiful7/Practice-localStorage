/// Notation,  /Dot notation,  /Bracket notation,

const person = {
    name: 'lal miah',
    profession: 'teacher',
    age: 32,
    address: 'Sonaimuri',
    25: 'count',
    'son-name': 'rafiq',
}

//dot notation,
const prof1 = person.profession;

//bracket notation,
const prof2 = person['profession'];
console.log(prof2);

const pName = 'profession'
const prof3 = person[pName];
console.log(prof3);



const season = person[25]
console.log(season);


const son = person['son-name'];
console.log(son);

