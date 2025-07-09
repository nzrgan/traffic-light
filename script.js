
let current = 0;
const lights = ["red", "yellow", "green"];

function nextLight() {
  lights.forEach(id => document.getElementById(id).classList.remove("active"));
  document.getElementById(lights[current]).classList.add("active");
  current = (current + 1) % lights.length;
}
