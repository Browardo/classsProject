console.log("Hello world")

let introField = document.querySelector(".intro-field")
let button = document.querySelector("button")

button.onclick = function(){
    let intro = introField.value
    let message = "YES."
    console.log(message)
    document.querySelector(message)
}
