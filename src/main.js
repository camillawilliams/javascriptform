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

const allInputs = document.querySelectorAll("form-control");

function validation() {
  var cardnumber = document.querySelector("cardnumber");
  var ccv = document.querySelector("ccv");
  var amount = document.querySelector("amount");
  var firstname = document.querySelector("firstname");
  var lastname = document.querySelector("lastname");
  var city = document.querySelector("city");
  var state = document.querySelector("state");
  var zip = document.querySelector("zip");
}

if (cardnumber.value.length < 10000000000000000) {
  displayError("Card number must be 16 digits");
  cardnumber.classList.add("invalid");
}
if (CCV.value.length != 3) {
  displayError("CCV must be 16 digits");
  CCV.classList.add("invalid");
}
if (amount.value.length > 0) {
  displayError("Amount must be entered");
  CCV.classList.add("invalid");
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
  var errorField = document.querySelector("alert");
  errorField.innerHTML += `<p>${message}</p>`;
}
document.querySelector("#myform").addEventListener("submit", validation);
//add messages into fields
