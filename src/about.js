const navButtons = document.querySelectorAll("nav button");
const contentDiv = document.querySelector("#content");

export function about() {
  navButtons[2].className = "active";

  const aboutDiv = document.createElement("div");
  aboutDiv.className = "aboutDiv";

  const storyDiv = document.createElement("div");
  const storyh1 = document.createElement("h1");
  storyh1.textContent = "Our Story";
  const storyp = document.createElement("p");
  storyp.innerHTML =
    "<span>Los Pollos Hermanos</span> began as a humble family dream — to share the bold, delicious flavors of our heritage with the world. What started as a small roadside eatery has grown into a beloved destination for crispy, juicy, and perfectly seasoned chicken. Every bite tells a story of dedication, spice, and the warmth of home cooking.";
  storyDiv.append(storyh1, storyp);

  const secretDiv = document.createElement("div");
  const secreth1 = document.createElement("h1");
  secreth1.textContent = "It’s All in the Recipe";
  const secretp = document.createElement("p");
  secretp.innerHTML =
    "We take pride in our <span>signature marinated chicken</span>, slow-cooked to perfection and served with a side of our famous house-made sauces. From our golden crispy tenders to our savory burritos and fresh sides, every dish is crafted with the finest ingredients and a whole lot of love.";
  secretDiv.append(secreth1, secretp);

  const tasteDiv = document.createElement("div");
  const tasteh1 = document.createElement("h1");
  tasteh1.textContent = "Come Taste the Difference";
  const tastep = document.createElement("p");
  tastep.innerHTML =
    "Whether you're grabbing a quick bite or sharing a meal with loved ones, Los Pollos Hermanos is here to serve you with a smile. After all, <em>good food brings people together</em> — and we wouldn’t have it any other way.";
  tasteDiv.append(tasteh1, tastep);

  aboutDiv.append(storyDiv, secretDiv, tasteDiv);
  contentDiv.appendChild(aboutDiv);
}
