import Logo from "../images/logo.png";

export default function loadHome() {
  const content = document.getElementById("content");

  const h1 = document.createElement("h1");
  const p = document.createElement("p");
  const myLogo = new Image();

  myLogo.src = Logo;
  myLogo.classList.add("logo");

  h1.innerText = "Di Molto";
  p.innerText =
    "This restaurant is awesome! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur";

  content.appendChild(myLogo);
  content.appendChild(h1);
  content.appendChild(p);
}
