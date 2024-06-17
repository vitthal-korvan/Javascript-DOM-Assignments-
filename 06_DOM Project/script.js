const logo = document.querySelectorAll(".logo");

logo.forEach((e) => {
  e.src = `./assets/ineuron-logo.png`;
  e.style.width = "200px";
});

document.querySelector(".app_price span").innerText = "$10";