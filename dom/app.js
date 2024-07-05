console.log('hi');

const section = document.querySelector("section");
const p = document.createElement("p");

p.textContent = "I LOVE DOM MANIPULATION";
section.appendChild(p);