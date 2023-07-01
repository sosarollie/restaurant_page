import loadHome from "./tabs/home";
import loadMenu from "./tabs/menu";
import loadContact from "./tabs/contact";
import render from "./functions/renderHeader";
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/brands'
import "./styles.css";

function component() {
  render();
  loadHome();

  const btnContainer = document.querySelector(".btnContainer");

  btnContainer.addEventListener("click", function (e) {
    switch (e.target.innerText) {
      case "Inicio":
        loadHome();
        break;
      case "Menú":
        loadMenu();
        break;
      case "Contacto":
        loadContact();
        break;
    }
  });

  return content;
}

function footer() {
  const footerDiv = document.createElement("footer");
  const icon = document.createElement("i");
  icon.classList.add("fa-brands", "fa-github")
  footerDiv.innerText = "Copyright 2023 @sosarollie";
  footerDiv.appendChild(icon);

  return footerDiv;
}

document.body.appendChild(component());
document.body.appendChild(footer());

