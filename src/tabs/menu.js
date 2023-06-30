import erase from "../functions/erase";
import menu1 from "../images/menu1.jpg";
import menu2 from "../images/menu2.jpg";
import menu3 from "../images/menu3.jpg";

export default function loadMenu() {
  erase();
  const content = document.getElementById("content");
  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menuContainer");
  const menuImages = [menu1, menu2, menu3];

  menuImages.forEach((menu) => {
    const myImg = new Image();
    myImg.src = menu;
    myImg.classList.add("menuImage");
    menuContainer.appendChild(myImg);
  });

  content.appendChild(menuContainer);
}
