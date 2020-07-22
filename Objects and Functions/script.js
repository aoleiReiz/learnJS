// Function Constructor

// let john = {
//     name: "John",
//     yearOfBirth: 1990,
//     job: "teacher"
// }
//
// let Person = function (name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }
//
// Person.prototype.calculateAge = function () {
//     let year = new Date();
//     console.log(year.getFullYear() - this.yearOfBirth)
// }
// Person.prototype.lastName= "aolei";
//
//
// let aolei = new Person("aolei", 1989, "developer")
// aolei.calculateAge()
// console.log(aolei.__proto__ === Person.prototype)
// console.log(aolei.hasOwnProperty("job")) //true
// console.log(aolei.hasOwnProperty("lastName")) //false, its Person prototype
// console.log(aolei instanceof Person) // true

// let personProto = {
//     calculateAge: function () {
//         dt = new Date();
//         console.log(dt.getFullYear() - 1989)
//     }
// }
//
// let aolei = Object.create(personProto,{
//     "name" : {"value":"aolei"}
// });

// primitives vs objects
// var a = 23;
// var b = a;
// a = 46;
// console.log(a)
// console.log(b);
//
// var obj1 = {
//     name:"aolei",
//     age:20
// }
// var obj2 = obj1;
// obj2.age = 30;
// console.log(obj1)
//
// function change(a, b) {
//     b.age = 22;
//     a = 31;
// }
// change(a,obj2);
// console.log(a);
// console.log(obj1)

// let years = [1990, 1965, 1937, 2005, 1998];
//
// function arrayCalc(arr, func) {
//     let arrRes = [];
//     for (let i=0; i < arr.length; i++){
//         arrRes.push(func(arr[i]));
//     }
//     return arrRes;
// }
//
// function calculateAge(element) {
//     return 2020 - element;
// }
//
// function isFullAge(element){
//     return element >= 18;
// }
//
// let r = arrayCalc(years, calculateAge);
// console.log(r);
// console.log(arrayCalc(r, isFullAge))
// console.log(arrayCalc(r, function (e) {
//     return e % 2 ===0;
// }))

// function returning function
// function interviewQuestion(job) {
//     if (job === "designer"){
//         return function (name) {
//             console.log(name + ", can you please what UX design is?")
//         }
//     }else if (job === "teacher"){
//         return function (name) {
//             console.log(name + ", what subject do you teach?")
//         }
//     }else{
//         return function (name) {
//             console.log("Hello " + name +", what do you do?")
//         }
//     }
// }
//
// let r = interviewQuestion("teacher");
// r("aolei");
// interviewQuestion("designer")("jonas");
//

// immediately called function
// function game() {
//     let score = Math.random() * 10;
//     console.log(score >= 5);
// }
// game();
// (
//     function () {
//         let score = Math.random() * 10;
//         console.log(score >= 5);
//     }
// )();
//
// (
//     function (goodluck) {
//         let score = Math.random() * 10;
//         console.log(score >= 5 - goodluck);
//     }
// )(5);


//////////////////////////////
/// lecture cloure

// function retirement(retirementAge) {
//     let a = ' years left until retirement';
//     return function (yearOfBirth) {
//         let age = 2020 - yearOfBirth;
//         console.log((retirementAge - age) + a);
//     }
// }
//
// let retirementUS = retirement(66);
// retirementUS(1989);
// retirement(66)(1989);

///////////////////////////////
// lecture bind call and apply
var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' +  this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
        } else if (style === 'friendly') {
            console.log('Hey! What\'s up? I\'m ' +  this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
        }
    }
};

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};

john.presentation('formal', 'morning');

john.presentation.call(emily, 'friendly', 'afternoon');

//john.presentation.apply(emily, ['friendly', 'afternoon']);

var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');


// Another cool example
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(limit, el) {
    return el >= limit;
}

var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);
