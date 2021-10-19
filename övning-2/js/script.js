document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault()

    for (let element of e.target)
        switch(element.tagName) {
            case 'INPUT':
                break;
            case 'SELECT':
                break;

            case 'TEXTAREA':
                break;
        }
})