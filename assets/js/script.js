// Função que tem como parametro a div com id chat e select do input
const createElement = (chat, sendBy) =>{
// criaçaõ de variavel para criaçaõ de uma tag 'p'    
const pElement = document.createElement('p')
// armazenamento em  variavel da div com id='chat'
const conversas = document.getElementById('chat')
// 
pElement.innerHTML = chat
// caso seja selecionado o select com value 2 é mudada a cor do texto pra red
pElement.style.color = (sendBy=='2') && "white"
pElement.style.backgroundColor = (sendBy=='2') && "#008641"
pElement.style.alignSelf = (sendBy=='2') && "end"
pElement.style.padding = (sendBy=='2') && "5px"
pElement.style.borderRadius = (sendBy=='2') && "5px"


// para cruar um elemento filho dentro da div com class='conversas'
conversas.appendChild(pElement)
}

function init(){
    const button = document.getElementById('enviar')
    const input = document.getElementById('message-input')
    const select = document.getElementById('escolha')

button.onclick = () =>{
        const message = input.value
        const sendBy = select.value
        createElement(message,sendBy)
        input.value =''
    }
}

init()
