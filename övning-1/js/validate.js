function validateLength(event, name, minLength = 2) {
    const error = document.getElementById(`error-${event.target.id}`)

    if (event.target.value === "")
            error.innerText = `Du måste ange ett ${name.toLowerCase()}`
    else {
        if(event.target.value < minLength)
            error.innerText = `${name}et måste bestå av minst ${minLength} tecken.`
        else
            error.innerText = ""
        }
} 

function compareValue(value, compareValue, name) {
    const error = document.getElementById(`error-${compareValue.target.id}`)

    if(value !== compareValue.target.value)
        error.innerText = `${name} matchar inte`
    else
        error.innerText = ``
        
}