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
  p.innerText = "Somos Vida Café, acercate a nuestro local y degustá una amplia variedad de bebidas calientes y frias, acompañado de la comida más rica y la mejor atención.";

  const p2 = document.createElement("p");
  p2.innerText = "Calle 3 e/ 61 y 62, N°1429";
  
  const icon = document.createElement("i");
  icon.classList.add("fa-solid", "fa-location-dot");

  const textContainer = document.createElement("div");
  textContainer.classList.add("textContainer");

  const location = document.createElement("div");
  location.classList.add("location");

  homeContainer.appendChild(myImg);
  textContainer.appendChild(p);
  location.appendChild(icon);
  location.appendChild(p2);
  textContainer.appendChild(location);
  homeContainer.appendChild(textContainer);
  content.appendChild(homeContainer);
}
