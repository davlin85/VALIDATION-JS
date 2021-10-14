

/* const domainName = 'domain.com'
let firstName = "David"
let lastName = 'Lindström'
let fullName = `${firstName.trim()} ${lastName.trim()}`
let email = `${fullName.toLocaleLowerCase()}@${domainName}`

console.log(email)
console.warn(email)
console.error(email)

let age = 36

let enabled = true


const app = document.getElementById('app')
console.log(app)

app.innerText = email
app.innerHTML = `<p style="font-size: 2.5rem">${email}</p>` */



const domainName = 'domain.com'
let user = {
    firstName : "David",
    lastName : 'Lindstrom',
    age : 36,
    skills: ['C#', "HTML", "CSS"],


    fullName : function() {
        return `${this.firstName} ${this.lastName}`
    }
}

let json_user = {
    "firstName": "David",
    "lastName": "Lindstrom",
    "age": 36
}

console.log(user)

let json = JSON.stringify(user)
console.log(json)


/*console.log(json_user)*/

var x = x + 5;
var y = 6;

z = x + y;

console.log()