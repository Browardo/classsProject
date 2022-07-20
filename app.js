// 1 & 2
let button = document.querySelector(".P1")
let button2 = document.querySelector(".P2")
let introField = document.querySelector(".intro-field")
let introField2 = document.querySelector(".intro-field2")
let message = "  "
let message2 = "  "
// 3 & 4
let button3 = document.querySelector(".P3")
let button4 = document.querySelector(".P4")
let introField3 = document.querySelector(".intro-field3")
let introField4 = document.querySelector(".intro-field4")
let message3 = "  "
let message4 = "  "
// 5
let button5 = document.querySelector(".P5")
let introField5 = document.querySelector(".intro-field5")
let message5 = "  "
// 1
button.onclick = function(){
    let intro = introField.value

    message = "Player 1: " + introField.value
    console.log(message)
    document.querySelector(".message").textContent = message
    }
// 2
   button2.onclick = function (){
    let intro2 = introField2.value
    message2 = "Player 2: " + introField2.value
    console.log(message2)
    document.querySelector(".message2").textContent = message2
    }
//3
button3.onclick = function (){
    let intro3 = introField3.value
    message3 = "Player 3: " + introField3.value
    console.log(message3)
    document.querySelector(".message3").textContent = message3
    }
//4
button4.onclick = function (){
    let intro4 = introField4.value
    message4 = "Player 4: " + introField4.value
    console.log(message4)
    document.querySelector(".message4").textContent = message4
    }
//5
button5.onclick = function (){
    let intro5 = introField5.value
    message5 = "Player 5: " + introField5.value
    console.log(message5)
    document.querySelector(".message5").textContent = message5
    }