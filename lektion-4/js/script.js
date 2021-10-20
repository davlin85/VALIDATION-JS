document.getElementById("name",).addEventListener("focus", function(e) {
    document.getElementById("labelName").style.fontSize = "0.9rem"
})
document.getElementById("name").addEventListener("blur", function(e) {
    document.getElementById("labelName").style.fontSize = ""
})

document.getElementById("email",).addEventListener("focus", function(e) {
    document.getElementById("labelEmail").style.fontSize = "0.9rem"
})
document.getElementById("email").addEventListener("blur", function(e) {
    document.getElementById("labelEmail").style.fontSize = ""
})