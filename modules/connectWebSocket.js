import { getCookie } from "./cookie"
import { renderLastMess } from "./renderLastMess"
import { values } from "./values"
import { newMessage } from "./new_Message_Notice"

const token = getCookie('Autorization_token')

var socket = new WebSocket(`wss://edu.strada.one/websockets?${token}`)

export function connectWebSocket(inputText) {

    values.send.addEventListener('submit',sendMessage)
    values.send_img.addEventListener('click',sendMessage)

    socket = new WebSocket(`wss://edu.strada.one/websockets?${token}`);
    socket.onopen = function() {
    console.log('>>> Connection established <<<');
      if(inputText) {
        console.log('>>>Message:', inputText,' <<<') 
        }
    }
    socket.onmessage = function(event) { 
        console.log(event.data)
        renderLastMess()
        newMessage()
    }
    socket.onclose = function(e) {
        console.log('>>>Socket is closed.  Try reconnect<<<', e.reason);
        connectWebSocket()
    }
    socket.onerror = function(err) {
        console.error('>>>Socket error: <<<', err.message);
        socket.close();
    }

    function sendMessage (e){
        e.preventDefault()
    if(e.target === values.send || e.target === values.send_img) {
        if(values.input_message.value!=''){
            socket.send(JSON.stringify({ text: `${values.input_message.value}` }))
            values.input_message.value = ''
        }
    }}

}

connectWebSocket()