const form = document.getElementById("form");
const toggle = document.getElementById("toggle");
const login = document.getElementById("login");
const signup = document.getElementById("signup");
const password2 = document.getElementById("password2");
const password = document.getElementById("password");
const title = document.getElementById("title");
const email = document.getElementById("email");
const error = document.getElementsByClassName("error");
const link = document.getElementById("link");

var x = 0;

link.addEventListener("click", (r) => {
    if(x==0){
        r.preventDefault();
        signup.className = 'signup selected';
        x = 1 - x;
        login.className = 'login';
        password2.style.display ='block'
        title.innerHTML = "SignUp Form"
        signup.style.transition = "all 1s ease"
    }
    
});

    signup.addEventListener("click", (e) => {
        if(x == 0){
            signup.className = 'signup selected';
            x = 1 - x;
            login.className = 'login';
            password2.style.display ='block'
            title.innerHTML = "SignUp Form"
            signup.style.transition = "all 1s ease"
        }
    });


login.addEventListener("click", (a) => {
    if(x == 1){
        login.className = 'login selected';
        x = 1 - x;
        signup.className = 'signup'; 
        password2.style.display ='none';
        title.innerHTML = 'Login Form';
        error[0].innerHTML = '';
        error[1].innerHTML = '';
        error[2].innerHTML = '';
        email.style.border = '1px solid rgb(180, 180, 180)';
        password.style.border = '1px solid rgb(180, 180, 180)';
        password2.style.border = '1px solid rgb(180, 180, 180)';


    }
});

form.addEventListener("submit", (f) => {
    f.preventDefault();
    if(x == 1){
        checkInputs();
    }
    if(x == 0){

    }
        
});



function checkInputs(){
    const emailValues = email.value.trim();
    const passwordValues = password.value.trim();
    const password2Values = password2.value.trim();

    if(emailValues == ''){
        error[0].innerHTML = 'Email Cannot be empty';
        email.style.border = '2px solid red';
    }else{
        error[0].innerHTML = ''
        email.style.border = '2px solid green';
    }

    if(passwordValues == ''){
        error[1].innerHTML = 'Password Cannot be empty';
        password.style.border = '2px solid red';
    }else{
        error[1].innerHTML = ''
        password.style.border = '2px solid green';
    }
    if(password2Values == ''){
        error[2].innerHTML = 'Password Cannot be empty';
        password.style.border = '2px solid red';

    }else if (passwordValues != password2Values) {
        error[2].innerHTML = 'Password is not same';
        password2.style.border = '2px solid red';
    } else {
        error[2].innerHTML = ''
        password2.style.border = '2px solid green';
    }
}