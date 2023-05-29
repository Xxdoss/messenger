import { values } from "./values"
import { deleteNewMessage } from "./new_Message_Notice";
import { formattingTime } from "./messege_Push";
import { messagelist, jsoninfo } from "./messege_Push";

let step = 20
let start = 0
let scrol = 0
let scrol2 = 0


export function load20 (i) {

    if (step===20) { 
        values.chat.scrollTop = 1e9 
    }

    if(i===step){
        return step += 20
    }
    
    let elem = document.createElement('div');
        elem.id = 'message'
            if (jsoninfo.email === messagelist[i].user.email) {
            elem.append(your_template.content.cloneNode(true))
        }
            else {
            elem.append(another_template.content.cloneNode(true))
        }

        elem.querySelector('#name').textContent = messagelist[i].user.name
        elem.querySelector('#time').textContent = formattingTime(messagelist[i].createdAt)
        elem.querySelector('#message_text').textContent = messagelist[i].text
        values.chat.prepend(elem)
        scrol = values.chat.scrollHeight
    return(i++,load20(i),start++,scrol)
}

values.chat.addEventListener('scroll', function() {
    if(this.scrollTop < 150){
        scrol2 = values.chat.scrollHeight

        if (step<messagelist.length) {
            load20(start)
            values.chat.scrollTop = scrol-scrol2
        }
        if (step>=messagelist.length){

            if (document.getElementById("all_message_loaded") == null){
                
                let elem = document.createElement('div');
                    elem.id = 'all_message'
                    elem.append(all_message_loaded_template.content.cloneNode(true))
                    elem.querySelector('#all_loaded').textContent ='Все сообщения загружены'
                    values.chat.prepend(elem)
            }
        }
    }
    if(values.chat.scrollHeight-parent.innerHeight+300<values.chat.scrollTop){
        deleteNewMessage ()
    }
})