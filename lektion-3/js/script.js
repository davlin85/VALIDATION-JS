let david = {
    firstName: 'David',
    lastName: 'Lindstrom',
    age: 36,
    isActive: true,
    skills: ["C#", "JS", "HTML5"],
    adress: {
        adressLine: "Lillbackavägen 11",
        zipCode: "702 42",
        city: "Örebro"
    }
}

class User {
    constructor(firstName, lastName, age, weight, isActive, skills, adress) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.weight = weight
        this.isActive = isActive
        this.skills = skills
        this.adress = adress
    }

    fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

let david_class = new User ("David", "Lindström", 36, 80, true, ['HTML', 'CSS', 'SASS', 'JS'])
david_class.middlename = "Stefan"

console.log(david_class.fullName());