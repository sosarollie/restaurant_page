import erase from "../functions/erase";

export default function loadContact() {
  erase();
  const content = document.getElementById("content");

  const contactContainer = document.createElement("div");
  contactContainer.classList.add("contactContainer");

  const timetable = document.createElement("p");
  timetable.classList.add("timetable");
  timetable.innerHTML = "Lunes a Viernes de 08:00 a 20:00, Sábados de 08:00 a 14:00";
  
  const phoneIcon = document.createElement("i");
  phoneIcon.classList.add("fa-solid", "fa-phone");

  const p = document.createElement("p");
  p.innerText = "221 456 2111";

  const tel = document.createElement("div");
  tel.classList.add("tel");

  const mail = document.createElement("div");
  mail.classList.add("mail");

  const mailIcon = document.createElement("i");
  mailIcon.classList.add("fa-solid", "fa-envelope");

  const p2 = document.createElement("p");
  p2.innerText = "cafevidalp@gmail.com";

  contactContainer.appendChild(timetable);
  tel.appendChild(phoneIcon);
  tel.appendChild(p);
  mail.appendChild(mailIcon);
  mail.appendChild(p2);
  contactContainer.appendChild(tel);
  contactContainer.appendChild(mail);
  content.appendChild(contactContainer);
}
