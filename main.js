import { format } from 'date-fns'
import { values } from './modules/values'
import { getCode } from './modules/getCode'
import { popups } from './modules/popups'
import { getCookie , setCookie, deleteCookie} from './modules/cookie'
import { messegePush, formattingTime } from './modules/messege_Push'
import { connectWebSocket } from './modules/connectWebSocket'

console.log(document.cookie ,'   <<<все куки')

function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}

function clear (){
    document.querySelectorAll('#message').forEach(function(){
        var elem = document.getElementById("message");
            elem.parentNode.removeChild(elem);
    }) 
}



//deleteAllCookies()/