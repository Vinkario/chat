const createElement = (chat, sendBy) => {
const messageBox = document.getElementById("message") 
const pElement = document.createElement("p")

pElement.innerHTML = chat
pElement.style.color = (sendBy == "2") && "red"

messageBox.appendChild(pElement)
}

const init = () => {
const button = document.getElementById("enviar")
const input = document.getElementById("message-input")
const select = document.getElementById("escolha")

button.onclick = () => {
const message = input.value
const sendBy = select.value

createElement(message, sendBy)

input.value = ""
}
}


init()