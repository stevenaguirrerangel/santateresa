"use strict";

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
