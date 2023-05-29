import { getCookie } from "./cookie"
import { load20 } from "./load20"

const token = getCookie('Autorization_token')
export let messagelist 
export let jsoninfo
let start = 0

export async function messegePush () {

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

    jsoninfo = await getuserinfo.json()

const resultGetName = await getNameResponse.json()
messagelist = ([resultGetName][0].messages)

    load20(start)
    return jsoninfo
}

export function formattingTime(time) {
    return new Date(time).toLocaleTimeString([ ], { hour: '2-digit', minute: '2-digit' });
}


messegePush()

