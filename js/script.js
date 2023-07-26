//get all inputs
var userEmailSignin = document.getElementById("userEmailSignin");
var userPasswordSignin = document.getElementById("userPasswordSignin");
//get btn login
var btnLogin = document.getElementById("btnLogin");

//get all inputs
var userName = document.getElementById("userName");
var userEmailSignup = document.getElementById("userEmailSignup");
var userPasswordSignup = document.getElementById("userPasswordSignup");
//get btn signup
var btnSignup = document.getElementById("btnSignup");

//get errors validation by Id
var dd = document.getElementById("dddddd");

var showError = document.getElementById("showError");

var showValid = document.getElementById("showValid");
var showResult = document.getElementById("showResult");
var showInvalid = document.getElementById("showInvalid");
var showRequired = document.getElementById("showRequired");

//check if user enter a valid name

var regexName = /^[a-zA-Z ]{3,13}$/;

//check if user enter a valid email
var regexEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

//check if user enter a valid password(min 8 letter password, with at least a symbol, upper and lower case letters and a number)
var regexPassword = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
var inputsObj = {};
function validateSignup() {
  showResult.style.display = "block";

  if (
    regexName.test(userName.value) === true &&
    regexEmail.test(userEmailSignup.value) === true &&
    regexPassword.test(userPasswordSignup.value) === true
  ) {
    dd.style.backgroundColor = "green";

    showValid.classList.add("isValid");
    showError.classList.remove("isError");

    inputsObj.nameUser = userName.value;
    inputsObj.emailUser = userEmailSignup.value;
    inputsObj.passwordUser = userPasswordSignup.value;

    var couvertedObject = JSON.stringify(inputsObj);
    localStorage.setItem("inputsUsers", couvertedObject);
  } else if (
    regexName.test(userName.value) === false ||
    regexEmail.test(userEmailSignup.value) === false ||
    regexPassword.test(userPasswordSignup.value) === false
  ) {
    dd.style.backgroundColor = "red";

    showError.classList.add("isError");
    showValid.classList.remove("isValid");
  }
}

var retrievedObject = localStorage.getItem("inputsUsers");
var getInputs = JSON.parse(retrievedObject);
//check if user enter a valid infos to login

function validateSignin() {
  showResult.style.display = "block";

  if (
    userEmailSignin.value != getInputs.emailUser ||
    userPasswordSignin.value != getInputs.passwordUser ||
    (userEmailSignin.value != getInputs.emailUser &&
      userPasswordSignin.value != getInputs.passwordUser)
  ) {
    showRequired.classList.remove("isRequired");

    showInvalid.classList.add("isInvalid");
  }
  if (
    userEmailSignin.value == "" ||
    userPasswordSignin.value == "" ||
    (userEmailSignin.value == "" && userPasswordSignin.value == "")
  ) {
    showRequired.classList.add("isRequired");
    showInvalid.classList.remove("isInvalid");
  }
  if (
    userEmailSignin.value == getInputs.emailUser &&
    userPasswordSignin.value == getInputs.passwordUser
  ) {
    location.href = "home.html";
  }
}

//show name for user in home page

var userWelcome = document.getElementsByClassName("welcome-user")[0];
userWelcome.innerHTML = "Welcome " + getInputs.nameUser;
function logoutUser() {
  location.href = "index.html";
}
var btnLogout = document.getElementsByClassName("btnLogout")[0];
//show error result
