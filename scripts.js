const email = document.getElementById('email')
const country = document.getElementById('country')
const zipCode = document.getElementById('zipcode')
const password = document.getElementById("password")
const submitButton = document.querySelector("#submit")

const inputDiv = document.querySelectorAll('.input-group .message')

inputDiv.forEach(input => {
    input.addEventListener('click', () => {
        console.log(input.textContent)
    })
});
