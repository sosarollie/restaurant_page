import loadPage from "./load";
import "./styles.css";
import Logo from "./logo.png";

function component() {
  const content = document.getElementById("content");

  loadPage();

  content.appendChild(loadPage().myLogo);
  content.appendChild(loadPage().h1);
  content.appendChild(loadPage().p);

  return content;
}

document.body.appendChild(component());
