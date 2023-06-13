// Selecting element to view chat
var chatBotSession              = document.querySelector( ".chatBot .chatBody .chatSession" )

// Selecting trigger elements of conversation
var chatBotSendButton           = document.querySelector( ".chatBot .chatForm #sendButton" )
var chatBotTextArea             = document.querySelector( ".chatBot .chatForm #chatTextBox" )

// Default values for replies
var chatBotInitiateMessage      = "Hello! I am Hina."
var chatBotBlankMessageReply    = "Type something!"
var chatBotReply                =  "Hello Sir, How can i help you?"

// Collecting user input
var inputMessage                = ""
i=0

// This helps generate text containers in the chat
var typeOfContainer             = ""

// Function to open ChatBot
const msg=["Hello Sir,How can i help you","Did not get what you mean, please repeat..","Public Wi-Fi has many security issues. Wi-Fi attacks include karma attack, sniffing, war-driving, brute force attack, etc.Public Wi-Fi may identify data that is passed through a network device like emails, browsing history, passwords, and credit card data.",
"Data encryption is a technique in which the sender converts the message into a code. It allows only authorized user to gain access.",
"Spyware is a malware that aims to steal data about the organization or person. This malware can damage the organization’s computer system.",
"I'm glad that you like me?",
"Penetration Testing is the process of finding vulnerabilities on the target. In this case, the organization would have set up all the security measures they could think of and would want to test if there is any other way that their system/network can be hacked.",
"please use appropriate language sir."

]
chatBotSendButton.addEventListener("click", (event)=> {
    // Since the button is a submit button, the form gets submittd and the complete webpage reloads. This prevents the page from reloading. We would submit the message later manually
    event.preventDefault()
    if( validateMessage() ){
        inputMessage    = chatBotTextArea.value
        typeOfContainer = "message"
        createContainer( typeOfContainer )
        setTimeout(function(){
            typeOfContainer = "reply"
            createContainer( typeOfContainer )
        }, 750);
    }
    else{        
        typeOfContainer = "error";
        createContainer( typeOfContainer )
    }
    chatBotTextArea.value = ""
    chatBotTextArea.focus()
})

function createContainer( typeOfContainer ) {
    var containerID = ""
    var textClass   = ""
    switch( typeOfContainer ) {
        case "message"      :
            // This would create a message container for user's message
            containerID = "messageContainer"
            textClass   = "message"
            break;
        case "reply"        :
        case "initialize"   :
        case "error"        :
            // This would create a reply container for bot's reply
            containerID = "replyContainer"
            textClass   = "reply"
            break;
        default :
            alert("Error! Please reload the webiste.")
    }

    // Creating container
    
    var newContainer = document.createElement( "div" )
    newContainer.setAttribute( "class" , "container" )
    if( containerID == "messageContainer" )
        newContainer.setAttribute( "id" , "messageContainer" )
    if( containerID == "replyContainer" )
        newContainer.setAttribute( "id" , "replyContainer" )
    chatBotSession.appendChild( newContainer )

    switch( textClass ) {
        case "message"  :
            var allMessageContainers    = document.querySelectorAll("#messageContainer")
            var lastMessageContainer    = allMessageContainers[ allMessageContainers.length - 1 ]
            var newMessage              = document.createElement( "p" )
            newMessage.setAttribute( "class" , "message animateChat" )
            newMessage.innerHTML        = inputMessage
            lastMessageContainer.appendChild( newMessage )
            lastMessageContainer.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})
            break
        case "reply"    :
            var allReplyContainers      = document.querySelectorAll( "#replyContainer" )    
            var lastReplyContainer      = allReplyContainers[ allReplyContainers.length - 1 ]
            var newReply                = document.createElement( "p" )
            newReply.setAttribute( "class" , "reply animateChat accentColor" )
            switch( typeOfContainer ){
                case "reply"        :
                    
                    newReply.innerHTML  = msg[i];
                    i++;
                    break
                case "initialize"   :
                    newReply.innerHTML  = "Hi I am Hina, a deep learning AI bot developed by Logic Loaders Team."
                    break
                case "error"        :
                    newReply.innerHTML  = "Error"
                    break
                default             :
                    newReply.innerHTML  = "Sorry! I could not understannd."
            }
            setTimeout(function (){
                lastReplyContainer.appendChild( newReply )
                lastReplyContainer.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})
            }, 10)            
            break
        default         :
            console.log("Error in conversation")
    }
}

function initiateConversation() {
    chatBotSession.innerHTML = ""
    typeOfContainer = "initialize"
    createContainer( typeOfContainer )
}