const contentDiv = document.querySelector("#content");
const navButtons = document.querySelectorAll("nav button");

const menuItems = {
  chicken: {
    emoji: "🍗",
    price: 16,
  },
  pizza: {
    emoji: "🍕",
    price: 22,
  },
  taco: {
    emoji: "🌮",
    price: 18,
  },
  "french fries": {
    emoji: "🍟",
    price: 12,
  },
  hamburger: {
    emoji: "🍔",
    price: 20,
  },
  hotdog: {
    emoji: "🌭",
    price: 14,
  },
};

export function menu() {
  const gridDiv = document.createElement("div");
  gridDiv.className = "gridDiv";
  Object.entries(menuItems).forEach(([title, element]) => {
    const card = document.createElement("div");
    const h2Emoji = document.createElement("h2");
    const h2Title = document.createElement("h2");
    const pPrice = document.createElement("p");

    h2Emoji.textContent = element.emoji;
    h2Title.textContent = title;
    pPrice.textContent = "$" + element.price;
    card.append(h2Emoji, h2Title, pPrice);
    gridDiv.appendChild(card);
  });
  contentDiv.appendChild(gridDiv);
  navButtons[1].className = "active";
}
