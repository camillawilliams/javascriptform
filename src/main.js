/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const errorAlert = [
  "cardnumber",
  "ccv",
  "Amount",
  "First Name",
  "Last Name",
  "City",
  "State",
  "Zip Code"
];

// ];
// window.onload = function() {
//   console.log("Hello Rigo from the console!");
// };

const allInputs = document.querySelector("form-control");
// const cardnumber = document.querySelector("#cardnumber");

function validation(event) {
  event.preventDefault();

  var errorField = document.querySelector(".alert");
  errorField.innerHTML = "";
  !errorField.classList.contains("d-none") &&
    errorField.classList.toggle("d-none");

  var inputs = document.querySelectorAll("input");

  inputs.forEach(input => input.classList.remove("invalid"));

  var cardnumber = document.querySelector("#cardnumber");
  var ccv = document.querySelector("#ccv");
  var amount = document.querySelector("#amount");
  var firstname = document.querySelector("#firstname");
  var lastname = document.querySelector("#lastname");
  var city = document.querySelector("#city");
  var state = document.querySelector("#state");
  var zipcode = document.querySelector("#zip");
}

if (cardnumber.value < 10000000000000000) {
  displayError("Card number must be 16 digits");
  cardnumber.classList.add("invalid");
}
if (ccv.value.length != 3) {
  displayError("CCV must be 16 digits");
  ccv.classList.add("invalid");
}
if (amount.value.length != 0) {
  displayError("Amount required");
  amount.classList.add("invalid");
}
if (firstname.value.length > 0) {
  displayError("First name must be entered");
  firstname.classList.add("invalid");
}
if (lastname.value.length > 0) {
  displayError("Last name must be entered");
  lastname.classList.add("invalid");
}
if (city.value.length > 0) {
  displayError("Enter City");
  city.classList.add("invalid");
}
if (state.value === "Choose...") {
  displayError("Choose State");
  state.classList.add("invalid");
}
if (zipcode.value != 5) {
  displayError("Choose State");
  zipcode.classList.add("invalid");
}

function displayError(message) {
  var errorField = document.querySelector(".alert");
  errorField.innerHTML += `<p>${message}</p>`;
  errorField.classList.contains("d-none") &&
    errorField.classList.toggle("d-none");
}
document.querySelector("#myform").addEventListener("submit", validation);
//add messages into fields
