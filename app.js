holler.onLoad(()=>{

    holler.me((user)=>{
        function setVary3 () {
            vary=3
        }
        let chatMessage=""


        function clearDaMessage() {
            yourMessage=""
        document.querySelector(".your-message").textContent=yourMessage
        }

        let yourMessage = "You are not the Impostor.  Congrats."
        let yourAvatar = 0
        let chatMessageFR=""
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
        

        
        function sendMessageBrody () {
            chatMessage= chatMessage +"P1:  " +"\n" + introField6.value  +  "\n\n"
            console.log(chatMessage)
            document.querySelector(".chatMessage").textContent=chatMessage
            scroll(0,999999999999999999999999)
            introField6.value = ""
            
            updateMessages()

            //holler.appInstance.notifyClients(chatMessage)

        //holler.onClientEvent(event=>{
            //console.log("Client event received: " + event)
            
            
            
            // if(event.indexOf(playerSlot) == -1){
            //     let newPositionOtherPlayer = parseInt(event)
            //     setPosition(otherPlayer, newPositionOtherPlayer)
            // }
        }
        

        function updateMessages (){
            holler.appInstance.notifyClients(chatMessage)

        holler.onClientEvent(event=>{
            console.log("Client event received: " + event)
            
            chatMessage=event
            
            // if(event.indexOf(playerSlot) == -1){
            //     let newPositionOtherPlayer = parseInt(event)
            //     setPosition(otherPlayer, newPositionOtherPlayer)
            // }
        })
        }
        
            
        
        function sendMessageFR () {
            if (vary === 3) { 

                if (introField7.value =="") {
                    console.log ("empty")
                }else{

            chatMessageFR= chatMessageFR + "P1:  " + "\n" + introField7.value + "\n\n"
            console.log(chatMessageFR)
            document.querySelector(".chatMessageFR").textContent=chatMessageFR
            scroll(0,999999999999999999999999)
            introField7.value = ""
            
            holler.appInstance.notifyClients(chatMessageFR)

            holler.onClientEvent(event=>{
                console.log("Client event received: " + event)
                // if(event.indexOf(playerSlot) == -1){
                //     let newPositionOtherPlayer = parseInt(event)
                //     setPosition(otherPlayer, newPositionOtherPlayer)
                // }
            })
            

            waitAmoment()
        }
        }}

        // 1 & 2
        button = document.querySelector(".P1")
        button2 = document.querySelector(".P2")
        introField = document.querySelector(".intro-field")
        introField2 = document.querySelector(".intro-field2")
        message = ""
        message2 = ""
        // 3 & 4
        button3 = document.querySelector(".P3")
        button4 = document.querySelector(".P4")
       introField3 = document.querySelector(".intro-field3")
        introField4 = document.querySelector(".intro-field4")
        message3 = ""
         message4 = ""
        // 5
        button5 = document.querySelector(".P5")
        introField5 = document.querySelector(".intro-field5")
        message5 = ""

        buttons = [button, button2, button3, button4, button5, chatButton]
        introFields = [introField, introField2, introField3, introField4, introField5, introField6]
        // 1
        
        
        
        button.onclick = function(){
            if (introField.value === "") {
                console.log ("empty")
            }else{
            yourAvatar=1
            introFields.forEach(function (introField){
                introField.style["display"]="none"
            })  
            //for everyone else: button.style["display"]="none"
            buttons.forEach(function (button){
                
                button.style["display"]="none"
                    })
                    console.log (yourAvatar)
            message = "Player 1: " + introField.value
            console.log(message)
            document.querySelector(".message").textContent = message

            holler.appInstance.notifyClients(message)

            holler.onClientEvent(event=>{
                console.log("Client event received: " + event)
                // if(event.indexOf(playerSlot) == -1){
                //     let newPositionOtherPlayer = parseInt(event)
                //     setPosition(otherPlayer, newPositionOtherPlayer)
                // }
            })
        }
            }
        // 2
        button2.onclick = function (){
            if (introField2.value === "") {
                console.log ("empty")
            }else{
                yourAvatar=2
                introFields.forEach(function (introField){
                    introField.style["display"]="none"
                })  

                buttons.forEach(function (button){
                
                    button.style["display"]="none"
                        })
                        console.log (yourAvatar)
            message2 = "Player 2: " + introField2.value
            console.log(message2)
            document.querySelector(".message2").textContent = message2
            
            holler.appInstance.notifyClients(message2)

            holler.onClientEvent(event=>{
                console.log("Client event received: " + event)
                // if(event.indexOf(playerSlot) == -1){
                //     let newPositionOtherPlayer = parseInt(event)
                //     setPosition(otherPlayer, newPositionOtherPlayer)
                // }
        
        })
    }
    }
        //3
        button3.onclick = function (){
            if (introField3.value === ""){
                console.log ("empty")
            }else{
                yourAvatar=3
                introFields.forEach(function (introField){
                    introField.style["display"]="none"
                })  

                buttons.forEach(function (button){
                
                    button.style["display"]="none"
                        })
                        console.log (yourAvatar)
            message3 = "Player 3: " + introField3.value
            console.log(message3)
            document.querySelector(".message3").textContent = message3
            
            holler.appInstance.notifyClients(message3)

            holler.onClientEvent(event=>{
                console.log("Client event received: " + event)
                // if(event.indexOf(playerSlot) == -1){
                //     let newPositionOtherPlayer = parseInt(event)
                //     setPosition(otherPlayer, newPositionOtherPlayer)
                // }
        
        })
    }
        }
        //4
        button4.onclick = function (){
            if (introField4.value === ""){
                console.log ("empty")
            }else{

                yourAvatar=4

            introFields.forEach(function (introField){
                introField.style["display"]="none"
            })  

            buttons.forEach(function (button){
            
                button.style["display"]="none"
                    })
                    console.log (yourAvatar)
            message4 = "Player 4: " + introField4.value
            console.log(message4)
            document.querySelector(".message4").textContent = message4
            
            holler.appInstance.notifyClients(message4)

            holler.onClientEvent(event=>{
                console.log("Client event received: " + event)
                // if(event.indexOf(playerSlot) == -1){
                //     let newPositionOtherPlayer = parseInt(event)
                //     setPosition(otherPlayer, newPositionOtherPlayer)
                // }
        
        })
    }
        }
        //5
        button5.onclick = function (){
            if (introField5.value === ""){
                console.log ("empty")
            }else{

            yourAvatar=5
          
            introFields.forEach(function (introField){
                introField.style["display"]="none"
            })  

            buttons.forEach(function (button){
            
                button.style["display"]="none"
                    })
            
            console.log (yourAvatar)
            message5 = "Player 5: " + introField5.value
            console.log(message5)
            document.querySelector(".message5").textContent = message5
        
            holler.appInstance.notifyClients(message5)

            holler.onClientEvent(event=>{
                console.log("Client event received: " + event)
                // if(event.indexOf(playerSlot) == -1){
                //     let newPositionOtherPlayer = parseInt(event)
                //     setPosition(otherPlayer, newPositionOtherPlayer)
                // }
        
        })
    }
        }
        startButton=document.querySelector(".Start")
        startButton.onclick=function startGame() {

            //pick impostor
            
            function random_rule(rules) {
                return rules[Math.floor(Math.random()*rules.length)];
            } 
            const rules= ["Every message must contain 4 words or less",
            "Half of your messasges must be questions",
            "Every message must contain a prepositional phrase",
            "No punctuation"];
            
            function random_player(players) {
                return players[Math.floor(Math.random()*players.length)];
            } 
            let players = [1,2,3,4,5]
            
            console.log (yourAvatar)
            
            if (yourAvatar === (random_player(players))) {
                yourMessage = "You are the Impostor!\n\n Rule:\n\n" + [(random_rule(rules))]
            }
                    console.log (yourMessage)
                    document.querySelector(".your-message").textContent=yourMessage
                    setTimeout (clearDaMessage, 5000)
        //make stuff disapear    
            console.log ("start button pressed")
            startButton.style['display']="none"
            introFields.forEach(function (introField){
                    introField.style["display"]="none"
                })
            buttons.forEach(function (button){
                
                button.style["display"]="none"
                    })
                vary=2
                    gameTitle= " "
                    gameTitle2= " "
                    gameTitle3= " "
                    document.querySelector(".Title").textContent=gameTitle
                    document.querySelector(".Title1").textContent=gameTitle2
                    document.querySelector(".Title2").textContent=gameTitle3

                    chatMessage=""
                    
                    console.log ("chatMessageCleared")
                    document.querySelector(".chatMessage").textContent=chatMessage
                    //make stuff appear
                    introField7.style["display"]="block"
                    button7.style["display"]="block"
                    button7= document.querySelector(".button7")
                    introField7=document.querySelector(".intro-field7")

                    setTimeout (setVary3, 6000)     
            }

        ,function waitAmoment()  {
            vary=4
            console.log ("the players converseth")
            setTimeout (setVary3, 2000)
        } 
            
        chatButton.onclick = sendMessageBrody
        button7.onclick = sendMessageFR  

        document.onkeydown = function(event) {
            if (vary===1) {if (event.key == "Enter") {
                console.log("enter pressed")
                sendMessageBrody()
            }} else {
                if (event.key == "Enter") {
                    console.log("enter pressedFR")
                    sendMessageFR()}
                }
        } 


        holler.appInstance.notifyClients()

        holler.onClientEvent(event=>{
            console.log("Client event received: " + event)
            
            
            
            // if(event.indexOf(playerSlot) == -1){
            //     let newPositionOtherPlayer = parseInt(event)
            //     setPosition(otherPlayer, newPositionOtherPlayer)
            // }
        })


}
    )
}
)