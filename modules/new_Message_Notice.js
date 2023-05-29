import { values } from "./values"

let countmessage = 0

export function deleteNewMessage () {
    if(document.getElementById("new_message_") !== null){
        let elem = document.getElementById("new_message_")
            elem.parentNode.removeChild(elem)
    }
    return countmessage = 0
}

export function newMessage () {
    
    setTimeout(() => {
        
        if (document.getElementById("new_message_") == null){

            let elem = document.createElement('div')
                elem.id = 'new_message_'
                elem.addEventListener('click',function(){
                values.chat.scrollTop = 1e9
        })
            elem.append(new_message_template.content.cloneNode(true))
                values.chat.prepend(elem)

            const count = document.getElementById("count")
                count.textContent = countmessage
}
        else {

            if(countmessage>9){
            const count = document.getElementById("count")
                count.textContent = '9'
            }
            else{
            const count = document.getElementById("count")
                count.textContent = countmessage
            }
        }}, 2000)
    return countmessage++
}

values.chat.onclick = function(e){
    let target = e.target
    if (target.id === 'message_text'){
        if(document.getElementById("reply_area") == null){
            let a = document.createElement('div')
            a.id = 'reply_area'
            e.target.append(a)
        }
        if(document.getElementById("reply_area") !== null){
            let elem = document.getElementById("reply_area")
            elem.parentNode.removeChild(elem)
            let a = document.createElement('div')
            a.id = 'reply_area'
            e.target.append(a)
            a.addEventListener('click',function(){
                values.input_message.value = '➤ ' + target.textContent + " ✉ - "
            })
        }
    }
}