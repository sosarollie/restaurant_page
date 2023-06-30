import erase from "../functions/erase";
import img from "../images/vida_entrada.jpg";

export default function loadHome() {
  erase();
  const content = document.getElementById("content");

  const homeContainer = document.createElement("div");
  homeContainer.classList.add("homeContainer");

  const myImg = new Image();
  myImg.src = img;

  const p = document.createElement("p");
  p.innerText =
    "This restaurant is awesome! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur";

  homeContainer.appendChild(myImg);
  homeContainer.appendChild(p);
  content.appendChild(homeContainer);
}
