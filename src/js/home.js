import chickenPhoto from "../assets/imgs/chicken.png";
const contentDiv = document.querySelector("#content");
const navButtons = document.querySelectorAll("nav button")

export function homepage() {
  const textDiv = document.createElement("div");
  textDiv.className = "textDiv";
  const h1Text = document.createElement("h1");
  const h3Text = document.createElement("h3");
  const pText = document.createElement("p");

  h1Text.textContent = "Los Pollos Hermanos";
  h3Text.textContent = "Taste the Family!";
  pText.textContent = "We make some killer chicken according to Hank...";
  textDiv.append(h3Text, h1Text, pText);

  const photoDiv = document.createElement("div");
  photoDiv.className = "photoDiv";
  const chickenImage = document.createElement("img");
  chickenImage.src = chickenPhoto;
  photoDiv.appendChild(chickenImage);

  contentDiv.append(textDiv,photoDiv);

  navButtons[0].className = "active";
}
