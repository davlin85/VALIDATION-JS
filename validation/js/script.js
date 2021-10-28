function validMinValue(value, minValue = 2) {
    if(value.length < minValue)
        return false

    return true
}

function validZipCode(value, minValue = 5) {
    if(value.length < minValue)
        return false
    
    return true
}

function validEmail(value) {
    const regEx = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if(!regEx.test(value))
        return false

    return true
}

function validPassword(value) {
    const regEx = /^[A-Za-z]\w{7,14}$/;
    
    if(!regEx.test(value))
        return false

    return true
}

function validAge() {
    var x, text;
    x = document.getElementById("contactForm-birthDay").value;
    if (isNaN(x) || x < 10000000 || x > 20031107) {
      return false
    } else {
      return true
    }
  }

   function check() {
    if (document.getElementById('contactForm-password').value == document.getElementById('contactForm-confirmPassword').value) {
        document.getElementById("contactForm-confirmPassword-error").style.display =""

    } else {
        document.getElementById("contactForm-confirmPassword-error").style.display ="block"

    }
  }

function onSubmit(e) {
    e.preventDefault()
}

function checkValidForm(elements) {
    let error = false

    elements.forEach(element => {
        if(element.value === "")
            error = true
        })

        if(error)
            document.getElementById("contactForm-submit").disabled = true
        else
            document.getElementById("contactForm-submit").disabled = false
    
}

var forms = document.querySelectorAll('.needs-validation')

checkValidForm(forms)


forms.forEach(element => {
    switch(element.id) {
        case "contactForm-firstName":
        case "contactForm-lastName":
        case "contactForm-adress":
        case "contactForm-city":
            element.addEventListener('keyup', function (e) {
                if(!validMinValue(e.target.value)){ 
                    e.target.classList.add("is-invalid")
                    document.getElementById(`${e.target.id}-error`).style.display = "block"
                }
                else { 
                    e.target.classList.remove("is-invalid")
                    document.getElementById(`${e.target.id}-error`).style.display = "none"
                    checkValidForm(forms)
                }
            })
        break;

        case "contactForm-zipCode":
            element.addEventListener('keyup', function (e) {
                if(!validZipCode(e.target.value)) {
                    e.target.classList.add("is-invalid")
                    document.getElementById(`${e.target.id}-error`).style.display = "block"
                }
                else { 
                    e.target.classList.remove("is-invalid")
                    document.getElementById(`${e.target.id}-error`).style.display = "none"
                    checkValidForm(forms)
                }
            })
        break;

        case "contactForm-email":
            element.addEventListener('keyup', function (e) {
                if(!validEmail(e.target.value)) {
                    e.target.classList.add("is-invalid")
                    document.getElementById(`${e.target.id}-error`).style.display = "block"
                }
                else { 
                    e.target.classList.remove("is-invalid")
                    document.getElementById(`${e.target.id}-error`).style.display = "none"
                    checkValidForm(forms)
                }
            })
        break;

        case "contactForm-password":
            element.addEventListener('keyup', function (e) {
                if(!validPassword(e.target.value)){ 
                    e.target.classList.add("is-invalid")
                    document.getElementById(`${e.target.id}-error`).style.display = "block"
                }
                else { 
                    e.target.classList.remove("is-invalid")
                    document.getElementById(`${e.target.id}-error`).style.display = "none"
                    checkValidForm(forms)
                }
            })
        break;
        
        case "contactForm-birthDay":
            element.addEventListener('keyup', function (e) {
                if(!validAge(e.target.value)){ 
                    e.target.classList.add("is-invalid")
                    document.getElementById("contactFormbirthDayerror").style.display = "block"
                }
                else { 
                    e.target.classList.remove("is-invalid")
                    document.getElementById("contactFormbirthDayerror").style.display = "none"
                    checkValidForm(forms)
                }
            })
        break;

    }
})
