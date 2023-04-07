// let a = 5;
// let b = 7;
// a = a + b;
// b = a - b;
// a = a - b;
// console.log(a);
// console.log(b);
// 
let a = 3;
let b = 4;
a
console.log(a)
console.log(b)

// [a, b] = [b, a]
// console.log(a)
// console.log(b)
// const person = {
//     name: "Asildar",
//     surname: "Hajiyev",
//     age: 23,
//     fullName: function() { console.log(person.name + " " + person.age) },
//     adress: {
//         home: "Baku",
//         phone: 1234567,
//     }
// }
// Object.freeze(person)
// delete person.name;
// console.log(person)
// person.name = "Kamran";
// console.log(person.age, person.adress.home, );
// console.log(person.fullName);
const person1 = {
    name: "Asildar",
    surname: "Hajiyev",
    age: 23,
    instructor: false,
}
const person2 = {
    name: "Anar",
    surname: "Gandayev",
    age: 22,
}
console.log(Object.assign(person1, person2))
    // console.log(Object.issealed(person))