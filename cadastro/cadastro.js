const inputName = document.getElementById("name");
const inputEmail = document.getElementById("email");
const inputPassword = document.getElementById("password");
const inputConfirmPassword = document.getElementById("confirm-password");

const errorEmail = document.getElementById("error-email");
const errorName = document.getElementById("error-name");
const errorPassword = document.getElementById("error-password");
const errorConfirmPassword = document.getElementById("error-confirm-password");

const form = document.querySelector("form");

const closeNotification = document.getElementById("close-notification");
const screenSuccess = document.querySelector(".screen-success");

form.addEventListener("submit" ,  validateForm) 

async function validateForm(e){
     e.preventDefault();
    await checkName();
    await checkEmail();
    await checkPassword();
    await checkConfirmPassword();
    validateSuccess();
}


const checkName = () => {
    return new Promise ((resolve , reject) => {
    
        if(inputName.value.trim() === "") {
            errorName.innerHTML = "O nome é obrigatório"
            reject();
        }else if(inputName.value.trim().length < 5) {
            errorName.innerHTML = "Seu nome deve ter pelo menos 5 caracteres"
            reject();
        }else {
            resolve();
            errorName.innerHTML = "";
        }
    })
}


const checkEmail = () => {
    return new Promise ((resolve , reject) => {

        if(inputEmail.value.trim() === "") {
            console.log("o email é obrigatório");
            errorEmail.innerHTML = "o email é obrigatório"
            reject();
            
        }
        else if (!validateEmail(inputEmail.value.trim())) {
            console.log("use um email válido");
            errorEmail.innerHTML = "Use um email válido"
            reject();
            
        }else {
            errorEmail.innerHTML = "";
            resolve();
            
            
        }
    })
}

const checkPassword = () => {
    return new Promise ((resolve , reject) => {

        if(inputPassword.value.trim() === "") {
            console.log("a senha é obrigatória");
            errorPassword.innerHTML = "A senha é obrigatória"
            reject();
            
        }else if(inputPassword.value.trim().length < 7) {
            console.log("Sua senha deve ter pelo menos 7 caracteres");
            errorPassword.innerHTML = "Sua senha deve ter pelo menos 7 caracteres"
            reject(); 
            
        }else {
            errorPassword.innerHTML = "";
            resolve();
        }
    })
}

const checkConfirmPassword = () => {
    return new Promise ((resolve , reject) => {

        if(inputConfirmPassword.value.trim() === "") {
            console.log("a confirmação da senha é obrigatória");
            errorConfirmPassword.innerHTML = "A confirmação da senha é obrigatória"
            reject(); 
            
        }else if(inputConfirmPassword.value.trim() !== inputPassword.value.trim()){
            console.log("as senhas não concidem");
            errorConfirmPassword.innerHTML = "As senhas não concidem"
            reject(); 
            
        }else {
            errorConfirmPassword.innerHTML = ""
            resolve();
        }
    })
}

function validateSuccess () {
    screenSuccess.style.display = "flex";
}

closeNotification.addEventListener("click" , (e) => {
    screenSuccess.style.display = "none";
})

const validateEmail = (email) => {
    return String(email)
    .toLowerCase()
    .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    }