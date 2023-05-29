export const popups = {
    
    open_settings : document.getElementById('settings').addEventListener('click',function(){
        settings_popup.style.display = 'block'}),

    close_settings : document.getElementById('close_settings_img').addEventListener('click',function(){
        settings_popup.style.display = 'none'}),

    exit : document.getElementById('exit').addEventListener('click',function(){
        main.style.display = 'none'
        authorization_popup.style.display = 'block'}),

    confirm : document.getElementById('enter_code').addEventListener('click',function(){
        authorization_popup.style.display = 'none'
        confirmation_popup.style.display = 'block'}) 
}