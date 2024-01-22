let leftDetails = document.querySelector(".mainLeftDetails");
let enterName = document.querySelector("enterName");
let email = document.querySelector("enterMail");
let message = document.querySelector("enterMessage");
let rightDetails = document.querySelector(".mainRightDetails");
let userName = document.querySelector("usrerName");
let userMail = document.querySelector("userMail");
let userMessage = document.querySelector("userMessage");

rightDetails.addEventListener("submit", function (e) {
  e.preventDefault();
  enterName.innerHTML = userName.value;
});
