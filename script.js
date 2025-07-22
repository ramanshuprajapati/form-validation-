let inputName = document.querySelector('#name');
let inputEmail = document.querySelector('#email');
let inputPassword = document.querySelector('#password');
let form= document.querySelector('#signupForm');
let nameError = document.querySelector('#nameError');
let emailError = document.querySelector('#emailError');
let passwordError = document.querySelector('#passwordError');



form.addEventListener('submit',function(dts){
    dts.preventDefault();

    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";

    let name = inputName.value.trim();
    let email = inputEmail.value.trim();
    let password = inputPassword.value.trim();

    let nameCheck = /^[A-Za-z\s]{3,}$/;
    let emailCheck = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;
    let passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%!]).{6,}$/;

    if(!(nameCheck.test(name))){
        if(name == ""){
            nameError.textContent = "Please enter a name"
        }else{
        nameError.textContent = "Please enter a valid name"
        }
        
    }

    if(!(emailCheck.test(email))){
        if(email == ""){
        emailError.textContent = "Please enter a email"            
        }else{
    emailError.textContent = "Please enter a valid email"
        }
    }

    if(!(passwordCheck.test(password))){
        if(password == ""){
            passwordError.textContent = "Please enter a password"
        }else{
            passwordError.textContent = "Please enter a valid password"
        }
    }


    if((nameCheck.test(name)) && (emailCheck.test(email)) && (passwordCheck.test(password)) ){
        alert("form is submitted");
        form.reset();
    }


})



















