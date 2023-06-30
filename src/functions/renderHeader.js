import Logo from "../images/logo.png";

export default function render() {
  const body = document.querySelector("body");

  const myLogo = new Image();
  myLogo.src = Logo;
  myLogo.classList.add("logo");

  const btnContainer = document.createElement("div");
  btnContainer.classList.add("btnContainer");

  const homeBtn = document.createElement("button");
  const menuBtn = document.createElement("button");
  const contactBtn = document.createElement("button");

  homeBtn.innerText = "Home";
  menuBtn.innerText = "Menu";
  contactBtn.innerText = "Contact";

  homeBtn.classList.add("homeBtn");
  menuBtn.classList.add("menuBtn");
  contactBtn.classList.add("contactBtn");

  btnContainer.appendChild(homeBtn);
  btnContainer.appendChild(menuBtn);
  btnContainer.appendChild(contactBtn);

  body.appendChild(myLogo);
  body.appendChild(btnContainer);
}
