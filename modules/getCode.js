import { values } from "./values"

export async function getCode(e) {
    e.preventDefault()
    const inputEmail = document.querySelector('#authorization_input').value
    const response = await fetch(`https://edu.strada.one/api/user/`, {
        method: 'POST',
        body: JSON.stringify({ email: inputEmail }),
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
    })
    const result = response.json( )
    console.log(result)
}

values.authorization_form.addEventListener('submit',getCode)
values.get_code.addEventListener('click',getCode)