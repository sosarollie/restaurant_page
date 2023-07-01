import erase from "../functions/erase";

export default function loadContact() {
  erase();
  const content = document.getElementById("content");

  const contactContainer = document.createElement("div");
  contactContainer.classList.add("contactContainer");

  const icon = document.createElement("i");
  icon.classList.add("fa-solid", "fa-phone");

  const p2 = document.createElement("p");
  p2.innerText = "221 456 2111";

  const tel = document.createElement("div");
  tel.classList.add("tel");

  tel.appendChild(icon);
  tel.appendChild(p2);
  contactContainer.appendChild(tel);
  content.appendChild(contactContainer);
}
