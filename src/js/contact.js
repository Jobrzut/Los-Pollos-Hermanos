const navButtons = document.querySelectorAll("nav button");
const contentDiv = document.querySelector("#content");

export function contact() {
  navButtons[3].className = "active";

  const contactForm = document.createElement("form");

  const emailDiv = document.createElement("div");
  const emailLabel = document.createElement("label");
  emailLabel.textContent = "Email:";
  emailLabel.setAttribute("for", "emailInput");
  const emailInput = document.createElement("input");
  emailInput.type = "email";
  emailInput.id = "emailInput";
  emailDiv.append(emailLabel, emailInput);

  const messageDiv = document.createElement("div");
  const messageLabel = document.createElement("label");
  messageLabel.textContent = "Message:";
  messageLabel.setAttribute("for", "messageInput");
  const messageInput = document.createElement("textarea");
  messageInput.id = "messageInput";
  messageDiv.append(messageLabel, messageInput);

  const formButton = document.createElement("button");
  formButton.textContent = "Submit";
  formButton.addEventListener("click", (e) => {
    e.preventDefault();
  });
  contactForm.append(emailDiv, messageDiv, formButton);

  contentDiv.appendChild(contactForm);
}
