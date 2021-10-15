/*

    classic (krånlgar med ordet this)
    function theName() {}

    ES6 - arrow/lambda function (krånglar med ordet this)
    const theName = () => {}

*/

function validateInput (input) { 
if (input.length > 2)
    console.log(true)
else
    console.log(false)
}

validateInput(document.getElementById("firstName").value)