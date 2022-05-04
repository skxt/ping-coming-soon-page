// app
const email = document.getElementById('emailField')
const button = document.getElementById('btnInput')
let message = document.querySelector('#message')
let cntMessage = ''


let check = ()=>{
    if (email.value === '') {
        cntMessage = 'Email vuota'
        message.classList.remove('success')
        message.classList.add('error')
    } else {
        emailPass(email)
    }
    message.textContent = cntMessage
}

let emailPass = (email)=>{
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let regex = new RegExp(validRegex)
    
    if (email.value.match(regex)) {
        cntMessage = 'Email valida'           
        message.classList.remove('error')
        message.classList.add('success')
        message.innerText = cntMessage
        return true
    } else {
        cntMessage = 'Email non valida'
        message.classList.remove('success')
        message.classList.add('error')
        message.innerText = cntMessage
        return false
    }
}
        
button.addEventListener('click', check)
    

