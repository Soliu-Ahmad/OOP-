'use strict';
const someBody = {
    firstName: 'saheed',
    lastName: 'Adam',
    birthYear: 1982,

    calcAge() {
        return 2022 - this.birthYear
    }
}
console.log(someBody.calcAge());

// ES5 {function constructor}
const Person = function (firstName, lastName, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
}
Person.prototype.calcAge = function () {
    return 2022 - this.birthYear;
}

const blood = new Person('Saheed', 'adam', 1996);
console.log(blood);
console.log(blood.calcAge());    // thats how to add method to an  in ES5

// ES6 {class}
class PersonES6 {
    constructor(F, l, b) {
        this.f;
        this.l;
        this.b;
    }
    calcAge() {
        return 2022 - this.b;
    }

}
const burna = new PersonES6('Burna', 'Wizkid', 1994);
console.log(burna);