import { validateMinLength } from "./validate.js";



document.getElementById("contactForm").addEventListener("submit", function(e) {
    console.log(e)
    e.preventDefault(e.target.value)

    for (let element of e.target)
        switch(element.tagName) {
            case 'INPUT': 
                validateMinLength(element.value)
                break;
            case 'SELECT' :
                break;
            case 'TEXTAREA':
                break;
        }

})