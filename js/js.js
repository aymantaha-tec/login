//sing up html
var enterNameInput = document.getElementById('enterNameInput');
var enterEmailInput = document.getElementById('enterEmailInput');
var enterPasswordInput = document.getElementById('enterPasswordInput');
var signUpRecord = document.getElementById('signUpRecord');
var alert =document.getElementById('alert');
var alertSinUp =document.getElementById('alertSinUp');

//login in html
var checkEmail = document.getElementById('checkEmail');
var checkPassword = document.getElementById('checkPassword');
var loginIn = document.getElementById('loginIn');
var greating = document.getElementById('greating');

var lowerCaseLetters = /[a-z]/g;
var upperCaseLetters = /[A-Z]/g;
var numbers = /[0-9]/g;
var email = /\w+@\w+.\w/ig;
var trem;

var accountUsers =[];

if (localStorage.getItem("acc")!= null){
    accountUsers = JSON.parse(localStorage.getItem("acc"));
};


function creatAcount (){
    var accounts = {
        name: enterNameInput.value,
        email: enterEmailInput.value,
        pass: enterPasswordInput.value,
    }
    if (enterNameInput.value == 0 || enterEmailInput.value== 0 || enterPasswordInput.value == 0 ){
        alertSinUp.innerHTML ='All inputs is required';
    }
    else if((enterNameInput.value != null && enterEmailInput.value!= null && enterPasswordInput.value)) {
    alertSinUp.innerHTML = "Success";
    alertSinUp.classList.replace("text-danger", "text-success");
    accountUsers.push(accounts);
    location.href = "index.html";
    }

    localStorageMain ();
    clearForm();
};



function localStorageMain () {
    localStorage.setItem('acc', JSON.stringify(accountUsers))
};

function clearForm(){
    enterNameInput.value= '';
    enterEmailInput.value= '';
    enterPasswordInput.value ='';
};

function checkEmailNow() {
    for (var i = 0; i < accountUsers.length; i++) {
        if (checkEmail.value == 0 && checkPassword.value == 0) {
            alert.innerHTML = "All inputs are required";
            break;
        } else if (checkEmail.value == 0) {
            alert.innerHTML = "Please fill in email";
            break;
        } else if (checkPassword.value == 0) {
            alert.innerHTML = "Please fill in password";
            break;
        } else if (checkEmail.value == accountUsers[i].email && checkPassword.value == accountUsers[i].pass) {
            alert.innerHTML = "Success";
            alert.classList.replace("text-danger","text-success");
            location.href='home.html';
            alertSinUp.innerHTML = accountUsers[i].name;
            break;
        } else {
            alert.innerHTML = "Incorrect email or password";
        }
    }
}

function endLogOut (){
    location.href='index.html';
}
