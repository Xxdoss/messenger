import { getCookie } from "./cookie"
import { formattingTime } from "./messege_Push"
import { values } from "./values"

export async function renderLastMess () {
    const token = getCookie('Autorization_token')
const getNameResponse = await fetch('https://edu.strada.one/api/messages/', {
    method: 'GET',
    headers: {
      'content-type': 'text/html; charset=UTF-8',
      'Authorization': `Bearer ${token}`
    },
})

const getuserinfo = await fetch('https://edu.strada.one/api/user/me', {
    method: 'GET',
    headers: {
      'content-type': 'text/html; charset=UTF-8',
      'Authorization': `Bearer ${token}`
    },
  })

const jsoninfo = await getuserinfo.json()
const resultGetName = await getNameResponse.json()
   
  let elem = document.createElement('div');
  elem.id = 'message'

  if (jsoninfo.email === resultGetName.messages[0].user.email) {
    elem.append(your_template.content.cloneNode(true))
  }
  else {
    elem.append(another_template.content.cloneNode(true))
  }
  elem.querySelector('#name').textContent = resultGetName.messages[0].user.name
  elem.querySelector('#time').textContent = formattingTime(resultGetName.messages[0].createdAt)
  elem.querySelector('#message_text').textContent = resultGetName.messages[0].text
  values.chat.append(elem)
}