import { homepage } from "./js/home.js";
import { menu } from "./js/menu.js";
import { about } from "./js/about.js";
import { contact } from "./js/contact.js";
import "./css/global.css";
import "./css/nav.css";
import "./css/homepage.css";
import "./css/menu.css";
import "./css/about.css";
import "./css/contact.css";
import "./css/footer.css";

homepage();

const nav = document.querySelector("nav");
const navButtons = document.querySelectorAll("nav button");
const contentDiv = document.querySelector("#content");

function cleanDiv() {
  contentDiv.innerHTML = "";
  navButtons.forEach(element => {
    element.classList.remove("active");
  });
}

nav.addEventListener("click", (event) => {
  if (event.target.textContent === "Home") {
    cleanDiv();
    homepage();
  } else if (event.target.textContent === "Menu") {
    cleanDiv();
    menu();
  } else if (event.target.textContent === "About") {
    cleanDiv();
    about();
  } else if (event.target.textContent === "Contact") {
    cleanDiv();
    contact();
  } else if (event.target.classList.contains("logo")) {
    cleanDiv();
    homepage();
  }
});
