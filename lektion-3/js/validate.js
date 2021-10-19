export function validateMinLength(value, minLength = 2) {

    if(value.length < minLength)
        console.log(`Måste innehålla minst ${minLength} tecken.`)
}