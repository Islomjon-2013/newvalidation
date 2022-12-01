const username =document.getElementById(`username`);
const password= document.getElementById(`password`);
const form = document.getElementById(`form`);
const errorMessage = document.getElementById(`errorMessage`);
form.addEventListener(`submit`,(e) => {
    e.preventDefault();
const errors = [];
if(username.value===""){
    errors.push(`username requared`)
}
if(password.value.length < 4){
    errors.push(`password must me at least 4 characters `)
}

if(password.value.length > 10){
    errors.push(`password must me at less than 10 characters `)
}
if(errors.length > 0){
    console.log(errors);
    errorMessage.style.display = 'block';
    errorMessage.innerHTML = errors.join(`, `);
} else {
    errorMessage.style.display = 'none';
    window.location='./good.html'
}

})
 