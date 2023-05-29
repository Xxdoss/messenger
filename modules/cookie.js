import { values } from "./values";

export function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

export function setCookie(name, value, options = { } ) {
   
    options = {
      path: '/',
      ...options
    };
  
    if (options.expires instanceof Date) {
      options.expires = options.expires.toUTCString();
    }
  
    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
  
    for (let optionKey in options) {
      updatedCookie += "; " + optionKey;
      let optionValue = options[optionKey];
      if (optionValue !== true) {
        updatedCookie += "=" + optionValue;
      }
    }
  
    document.cookie = updatedCookie;
    console.log(getCookie('Autorization_token'),'    <<<<< токен')
}

export function deleteCookie(name) {
    setCookie(name, "", {
      'max-age': -1
    })
  }

function saveCookie () {
    document.cookie = `Autorization_token=${document.querySelector('#confirmation_input')}; expires=Tue, 19 Jan 2038 03:14:07 GMT`
} 

const token = getCookie('Autorization_token')
values.login.addEventListener('click',saveCookie)
values.chat_name.addEventListener('submit',setName)

async function setName(e) {
    e.preventDefault()
  if (e.target === values.chat_name){
  
    const inputText = values.change_name.value
    const setNameResponse = await fetch('https://edu.strada.one/api/user', {
      method: 'PATCH',
      body: JSON.stringify({name: inputText }),
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    })
    const getNameResponse = await fetch('https://edu.strada.one/api/user/me', {
      method: 'GET',
      headers: {
        'content-type': 'text/html; charset=UTF-8',
        'Authorization': `Bearer ${token}`
      },
    })
  
    const resultGetName = await getNameResponse.json()
    values.change_name.placeholder = resultGetName.name
  
    console.log(setNameResponse,'1')
    console.log(getNameResponse,'2')
    console.log(resultGetName,'3')}
}

async function rendername () {

  const getNameResponse = await fetch('https://edu.strada.one/api/user/me', {
    method: 'GET',
    headers: {
      'content-type': 'text/html; charset=UTF-8',
      'Authorization': `Bearer ${token}`
    },
  })

  const resultGetName = await getNameResponse.json()
  values.change_name.placeholder = resultGetName.name
}

rendername()