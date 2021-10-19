/*document.getElementById("javascript").innerText = "Hej"

console.log(document.getElementById("javascript").innerText)

console.error("Hjälp")*/


/* let david = {
    firstName: 'David',
    lastName: 'Lindström',
    age: 36,
    weight: 78,
    isActive: true,
    skills: ['HTML', 'CSS/SASS', 'JavaScript'],
    adress: {
        adressLine: 'Lillbackavägen 11',
        zipCode: '702 42',
        city: 'Örebro'
    },

    fullName: function() {
        return `${this.firstName} ${this.lastName}`
    }
}


class user {
    constructor(firstName, lastName, age, weight, isActive, skills, adress) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.weight = weight
        this.isActive = isActive
        this.skills = skills
        this.adress = adress
    }
}

let user2 = new user ('David', 'Lindström', 36, 78, true, ['HTML', 'CSS', 'JavaScript'], {adressLine: 'Lillabackavägen 11', zipcode: '702 42', city: 'Örebro'})
david.middleName = 'Stefan'


console.log(david.fullName());


let message = {
    decviceID: 'device1',
    temperature: 0,
}


const david = () => {
    
}

function david2 () {

}

*/


/*function validateLength(input, minLength = 2) {
    if (input.length > minLength)
console.log(true)
    else 
console.log(false)

}

function confirmPassword(password, confirmPassword) {
    if (password === confirmPassword)
        console.log(true)
    else
        console.log(false)
}

//validateLength(document.getElementById("firstName").value)
//validateLength(document.getElementById("lastName").value)

let input_password = document.getElementById("password").value
let input_ConfirmPassword = document.getElementById("confirmPassword").value

confirmPassword(input_password, input_ConfirmPassword)*/



document.getElementById("firstName").addEventListener("keyup", function(event) {
    validateLength(event, "Förnamn")
})

document.getElementById("lastName").addEventListener("keyup", function(event) {
    validateLength(event, "Efternamn")
})

document.getElementById("password").addEventListener("keyup", function(event) {
    validateLength(event, "Lösenord", 8)
})

document.getElementById("confirmPassword").addEventListener("keyup", function(event) {
    compareValue(document.getElementById("password").value, event, "Lösenord")
})


