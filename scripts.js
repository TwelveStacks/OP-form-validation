const email = document.getElementById('email')
const country = document.getElementById('country')
const zipCode = document.getElementById('zipcode')
const password = document.getElementById("password")
const submitButton = document.querySelector("#submit")
const form = document.getElementById('form')

const errorMessage = document.querySelector('.message')

form.addEventListener('submit', (e) => {
    let messages = []

    validateEmail(email.value, messages)

    if (messages.length > 0) {
        e.preventDefault()
        errorMessage.innerText = messages.join(', ')
    }
})

function validateEmail(email, messages) {
    let mailFormat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (email.match(mailFormat)) {
        return true;
    }
    else {
        messages.push('Please enter a valid email address')
        return false;
    }
}


