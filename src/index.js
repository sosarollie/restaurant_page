import loadHome from "./tabs/home";
import loadMenu from "./tabs/menu";
import loadContact from "./tabs/contact";
import render from "./functions/renderHeader";
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import "./styles.css";

function component() {
  render();
  loadHome();

  const btnContainer = document.querySelector(".btnContainer");

  btnContainer.addEventListener("click", function (e) {
    switch (e.target.innerText) {
      case "Home":
        loadHome();
        break;
      case "Menu":
        loadMenu();
        break;
      case "Contact":
        loadContact();
        break;
    }
  });

  return content;
}

document.body.appendChild(component());
