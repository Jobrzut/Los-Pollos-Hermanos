import { homepage } from "./home.js";
import { menu } from "./menu.js";
import "./css/global.css";
import "./css/nav.css";
import "./css/homepage.css";
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
    
  } else if (event.target.textContent === "Contact") {
    
  } else if (event.target.classList.contains("logo")) {
    contentDiv.innerHTML = "";
    homepage();
  }
});
