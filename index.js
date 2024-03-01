"use strict";

const map = L.map("map").setView([25.66516, -100.264651], 16);

L.tileLayer("https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

const marker = L.marker([25.66516, -100.264651]).addTo(map);
