let firstname = document.getElementById("first_name");
let lastname = document.getElementById("last_name");
let login = document.getElementById("login");  
let password = document.getElementById("password");  
let checkpass = document.getElementById('checked_password');
let number = document.getElementById('number');
let rules = document.getElementById('rules');

function checkName() {
    document.getElementById('errorName').innerHTML = "";

    if (firstname.value == '') {
    document.getElementById('errorName').innerHTML += "Пожалуйста, заполните Ваше имя";
    }
}

function checkLastName() {
    document.getElementById('errorLastName').innerHTML = "";

    if (lastname.value == '') {
        document.getElementById('errorLastName').innerHTML += "Пожалуйста, заполните Вашу фамилию";
    }
}

function checkLogin() {
    document.getElementById('errorLogin').innerHTML = "";

    if (login.value == '') {
        document.getElementById('errorLogin').innerHTML += "Пожалуйста, введите логин";
    }
}

function checkPassword() {
    document.getElementById('errorPassword').innerHTML = "";

    if (password.value.length == 0 ) {
            document.getElementById('errorPassword').innerHTML += "Пожалуйста, введите пароль";
    } else if (password.value.length <= 5 || password.value.length  >= 20) {
        document.getElementById('errorPassword').innerHTML += "Пароль должен содержать больше 5 символов";
    }
}

function checkedPassword() {
    document.getElementById('errorChecked_password').innerHTML = "";

    if (checkpass.value.length == 0) {
        document.getElementById('errorChecked_password').innerHTML += "Повторите пароль";
    } else if (checkpass.value != password.value) {
        document.getElementById('errorChecked_password').innerHTML += "Пароли не совпадают";
    } 
}

function checkNumber() {
    document.getElementById('errorNumber').innerHTML = "";

    if (number.value == '') {
        document.getElementById('errorNumber').innerHTML += "Пожалуйста, введите номер телефона";
    }
}

function checkAll() {
    document.getElementById('errorAll').innerHTML = '';

    if (firstname.value == '' || lastname.value =='' || login.value =='' || password.value == '' || checkpass.value == '' || number.value == '') {
        document.getElementById('errorAll').innerHTML += "Заполните все поля";
    } else if (rules.checked == false) {
        document.getElementById('errorAll').innerHTML += "Ознакомьтесь с Пользовательским соглашением";
    } else {
        alert ('Добро пожаловать, ' + firstname);
    }
}
