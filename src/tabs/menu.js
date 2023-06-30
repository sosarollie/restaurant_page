import erase from "../functions/erase";

export default function loadMenu() {
  erase();
  const content = document.getElementById("content");

  const p = document.createElement("p");
  p.innerText = "menu";

  content.appendChild(p);
}
