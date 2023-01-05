const inputEmail = document.getElementById("email");
const inputPassword = document.getElementById("password");
const rememberPassword = document.getElementById("remember");
const form = document.querySelector("form");

const errorEmail = document.getElementById("error-email");
const errorPassword = document.getElementById("error-password");

const soonInterface = document.querySelector(".soon-interface");

form.addEventListener("submit" , validateForm)

async function validateForm (e) {
    e.preventDefault();
    await checkEmail();
    await checkPassword();
    showSoonInterface();
}

const checkEmail = () => {
    return new Promise ((resolve , reject) => {
        
        if(inputEmail.value.trim() === "") {
            console.log("email vazio");
            errorEmail.innerHTML = "Insira seu email";
            inputEmail.style.border="2px solid red"
            reject();
    
        }else if(!validateEmail(inputEmail.value.trim())){
            console.log("email invalido");
            errorEmail.innerHTML = "Email invalido";
            inputEmail.style.border="2px solid red";
            reject();
        }else {
            errorEmail.innerHTML = "";
            inputEmail.style.border = "2px solid #6d7172"
            resolve();
        }
    })

}

const checkPassword = () => {
    return new Promise ((resolve , reject) => {
        if(inputPassword.value.trim() === "") {
            console.log("senha vazio");
            errorPassword.innerHTML = "Senha invalida"
            inputPassword.style.border="2px solid red"
            reject();
        }else {
            errorPassword.innerHTML = "";
            resolve();
            inputPassword.style.border = "2px solid #6d7172"
        }
    })
}

function showSoonInterface () {
    soonInterface.style.display = "flex";
}

function closeSoonInterface() {
    soonInterface.style.display = "none";
}

const validateEmail = (email) => {
    return String(email)
    .toLowerCase()
    .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

    
