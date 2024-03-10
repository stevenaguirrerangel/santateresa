"use strict";

const form = document.getElementById("form");

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

// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   const firstName = document.getElementById("first-name").value;
//   const lastName = document.getElementById("last-name").value;
//   const businessName = document.getElementById("business").value;
//   const businessEmail = document.getElementById("email").value;
//   const phoneNumber = document.getElementById("phone").value;
//   const contactMsg = document.getElementById("message").value;
//   console.log(
//     firstName,
//     lastName,
//     businessName,
//     businessEmail,
//     phoneNumber,
//     contactMsg
//   );
// });
