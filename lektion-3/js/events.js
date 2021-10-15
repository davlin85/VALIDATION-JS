const regForm = document.getElementById("regForm")

const firstName = document.getElementById("firstName")
const errorfirstName = document.getElementById("error-firstName")

const lastName = document.getElementById("lastName")
const errorlastName = document.getElementById("error-lastName")

const resluts = document.getElementById("results")

firstName.addEventListener("keyup", function(event) {
    if (event.target.value === "")
        errorfirstName.innerText = "Du måste ange ett förnamn."
    else{ 

    if(event.target.value.length < 2)
        errorfirstName.innerText = "Förnamet måste bestå av minst 2 tecken."
    else
    errorfirstName.innerText = ""
}
}) 

lastName.addEventListener("keyup", function(event) {
    if (event.target.value === "")
        errorlastName.innerText = "Du måste ange ett efternamn."
    else{ 

    if(event.target.value.length < 2)
        errorlastName.innerText = "Efternamn måste bestå av minst 2 tecken."
    else
    errorlastName.innerText = ""
}
}) 