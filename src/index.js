import { homepage } from "./home.js";
import "./css/global.css";
import "./css/nav.css";
import "./css/homepage.css";
import "./css/footer.css";

homepage();

const nav = document.querySelector("nav");
const contentDiv = document.querySelector("#content");

nav.addEventListener("click", (event) => {
  if (event.target.textContent === "Home") {
    contentDiv.innerHTML = "";
    homepage();
  } else if (event.target.textContent === "Menu") {
    
  } else if (event.target.textContent === "About") {
    
  } else if (event.target.textContent === "Contact") {
    
  } else if (event.target.classList.contains("logo")) {
    contentDiv.innerHTML = "";
    homepage();
  }
});
