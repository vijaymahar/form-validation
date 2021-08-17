// creating variables
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const number = document.getElementById("number");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("cpassword");
// creating variables

// form submit event
form.addEventListener("submit", (event) => {
  event.preventDefault();
  validate();
});
// form submit event

// validation part
const validate = () => {
  const usernameVal = username.value.trim();
  const emailVal = email.value.trim();
  const numberVal = number.value.trim();
  const passowrdVal = password.value.trim();
  const confirmPasswordVal = confirmPassword.value.trim();

  //   username validation
  if (usernameVal == "" || usernameVal == undefined) {
    setErrorMsg(username, "username cannot be empty");
  } else if (usernameVal.length <= 3) {
    setErrorMsg(username, "username cannot be less than 4 charecters");
  } else {
    setSuccessMsg(username);
  }
  //   username validation

  //   email validation
  if (emailVal == "" || emailVal == undefined) {
    setErrorMsg(email, "email cannot be empty");
  } else if (
    !emailVal.match(
      /^([a-zA-Z0-9_\.\-])+(\@(([a-zA-Z]{4,})+\.))+([a-zA-Z]{2,4})+$/
    )
  ) {
    setErrorMsg(email, "plese enter a proper email id");
  } else {
    setSuccessMsg(email);
  }
  //   email validation

  // number validation
  if (numberVal == "" || numberVal == undefined) {
    setErrorMsg(number, "number cannot be empty");
  } else if (numberVal.length <= 9) {
    setErrorMsg(number, "number must contain 10 digits");
  } else if (numberVal.length > 10) {
    setErrorMsg(number, "number cannot be more than 10 digits");
  } else if (!numberVal.match(/^[6-9]\d{9}$/)) {
    setErrorMsg(number, "please enter a valid mobile number");
  } else {
    setSuccessMsg(number);
  }
  // number validation

  //   password validation
  if (passowrdVal == "" || passowrdVal == undefined) {
    setErrorMsg(password, "password cannot be empty");
  } else if (passowrdVal.length <= 5) {
    setErrorMsg(password, "password must be 6 characters length");
  } else if (!passowrdVal.match(/^(?=.*?[A-Z])/)) {
    setErrorMsg(password, "password must contain 1 upper charecter");
  } else if (!passowrdVal.match(/^(?=.*?[a-z])/)) {
    setErrorMsg(password, "password must contain 1 lower charecter");
  } else if (!passowrdVal.match(/^(?=.*?[0-9])/)) {
    setErrorMsg(password, "password must contain 1 digit");
  } else if (!passowrdVal.match(/^(?=.*?[-_@?!$.])/)) {
    setErrorMsg(password, "password must contain 1 special charecter");
  } else {
    setSuccessMsg(password);
  }
  //   password validation

  // confirm password validation
  if (confirmPasswordVal == "" || confirmPasswordVal == undefined) {
    setErrorMsg(confirmPassword, "confirmation password field cannot be empty");
  } else if (confirmPasswordVal != passowrdVal) {
    setErrorMsg(confirmPassword, "password not matched");
  } else {
    setSuccessMsg(confirmPassword);
  }
  // confirm password validation
};
// validation part

function setErrorMsg(input, msg) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  small.innerText = msg;
  formControl.className = "col-12 error";
}
function setSuccessMsg(input) {
  const formControl = input.parentElement;
  formControl.className = "col-12 success";
}

// password view
const check = document.getElementById("eyeLock");
// var pass = document.getElementById("password");
check.addEventListener("click", (password) => {
  password.style.visibility = "visible";
});
// password view
