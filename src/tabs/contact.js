import erase from "../functions/erase";

export default function loadContact() {
  erase();
  const content = document.getElementById("content");

  const p = document.createElement("p");
  p.innerText = "contact";

  content.appendChild(p);
}