"use strict";
/////////////Buttons//////////////////////////////

const formSubmitBtn = document.querySelector(".submit");
const form = document.getElementById("form");

//////////////////////////////////////////////////

const displayMap = function () {
  const map = L.map("map").setView(
    [25.711996141653927, -100.2934482337229],
    16
  );

  L.tileLayer("https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  const marker = L.marker([25.711996141653927, -100.2934482337229]).addTo(map);
};
displayMap();

formSubmitBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const firstName = document.getElementById("first-name").value;
  const lastName = document.getElementById("last-name").value;
  const company = document.getElementById("company").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;

  console.log(firstName, lastName, company, email, phone, message);
});
