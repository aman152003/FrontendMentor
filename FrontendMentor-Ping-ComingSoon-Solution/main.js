const input = document.querySelector('#input');
const form = document.querySelector('#form');
const notifyBtn = document.querySelector('.notify-btn');
const errorMessage = document.querySelector('.error-msg');
const successMessage = document.querySelector('.success-msg');

function ValidateEmail(inputText){
var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
if(!inputText.value.match(mailformat))
{
errorMessage.classList.remove('hide');
successMessage.classList.add('hide');
}
else
{
successMessage.classList.remove('hide');
errorMessage.classList.add('hide');
}
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    ValidateEmail(input);
})

