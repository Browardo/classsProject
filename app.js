let yourMessage = ""
let yourAvatar = 0
let chatMessageFR=" "
let vary=1
let button7=document.querySelector(".button7")
button7.style["display"]="none"
let introField7 = document.querySelector(".intro-field7")
introField7.style["display"]="none"
let gameTitle = "TITLE"
console.log(gameTitle)
document.querySelector(".Title").textContent = gameTitle

let gameTitle1 = "OF"
console.log(gameTitle1)
document.querySelector(".Title1").textContent = gameTitle1

let gameTitle2 = "GAME"
console.log(gameTitle2)
document.querySelector(".Title2").textContent = gameTitle2

let Gtitle= [gameTitle, gameTitle1, gameTitle2]

let chatButton= document.querySelector(".chat")
let introField6=document.querySelector(".intro-field6")
let chatMessage="  "


function sendMessageBrody () {
    chatMessage= chatMessage +"P1:  " +"\n" + introField6.value  +  "\n\n"
    console.log(chatMessage)
    document.querySelector(".chatMessage").textContent=chatMessage
    scroll(0,99999999999999999999999)
    introField6.value = ""
}

function sendMessageFR () {
    chatMessageFR= chatMessageFR + "P1:  " + "\n" + introField7.value + "\n\n"
    console.log(chatMessageFR)
    document.querySelector(".chatMessageFR").textContent=chatMessageFR
    scroll(0,99999999999999999999999)
    introField7.value = ""
}

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

let buttons = [button, button2, button3, button4, button5, chatButton]
let introFields = [introField, introField2, introField3, introField4, introField5, introField6]
// 1
button.onclick = function(){
    yourAvatar = 1

    message = "Player 1: " + introField.value
    console.log(message)
    document.querySelector(".message").textContent = message
    }
// 2
   button2.onclick = function (){
    yourAvatar = 2
    message2 = "Player 2: " + introField2.value
    console.log(message2)
    document.querySelector(".message2").textContent = message2
    }
//3
button3.onclick = function (){
    yourAvatar = 3
    message3 = "Player 3: " + introField3.value
    console.log(message3)
    document.querySelector(".message3").textContent = message3
    }
//4
button4.onclick = function (){
    yourAvatar = 4
    message4 = "Player 4: " + introField4.value
    console.log(message4)
    document.querySelector(".message4").textContent = message4
    }
//5
button5.onclick = function (){
    yourAvatar = 5
    console.log (yourAvatar)
    message5 = "Player 5: " + introField5.value
    console.log(message5)
    document.querySelector(".message5").textContent = message5
}
let startButton=document.querySelector(".Start")
startButton.onclick=function startGame() {
    console.log ("start button pressed")
    startButton.style['display']="none"
    introFields.forEach(function (introField){
            introField.style["display"]="none"
        })
    buttons.forEach(function (button){
        //make stuff disapear    
        button.style["display"]="none"
            })
        vary=2
            gameTitle= " "
            gameTitle2= " "
            gameTitle3= " "
            document.querySelector(".Title").textContent=gameTitle
            document.querySelector(".Title1").textContent=gameTitle2
            document.querySelector(".Title2").textContent=gameTitle3

            chatMessage=" "
            
            console.log ("chatMessageCleared")
            document.querySelector(".chatMessage").textContent=chatMessage
            //make stuff appear
            introField7.style["display"]="block"
            button7.style["display"]="block"
            button7= document.querySelector(".button7")
            introField7=document.querySelector(".intro-field7")
function random_player(players) {
  return players[Math.floor(Math.random()*players.length)];
} 

  let players = [1,2,3,4,5]; 
console.log(random_player(players));

  let rule = "Every message has 4 words or less."
            if (yourAvatar === random_player) {yourMessage = "You are the Impostor!\nRule:" + rule
        console.log (yourMessage)}



    }

    
    
chatButton.onclick = sendMessageBrody
button7.onclick = sendMessageFR

document.onkeydown = function(event) {
    if (vary===1) {if (event.key == "Enter") {
        console.log("enter pressed")
        sendMessageBrody()
    }} else {
        if (vary===2) {if (event.key == "Enter") {
            console.log("enter pressedFR")
            sendMessageFR()}
        }}
        
} 

        
