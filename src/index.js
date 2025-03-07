import "./style.css";
import { pageContent } from "./content.js";

const contentElement = document.querySelector("#content");
const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const aboutButton = document.querySelector("#about");
let buttons = document.querySelectorAll("button");

function createItem(title, content, image = false, container = contentElement) {
  let itemElement = document.createElement("div");
  itemElement.classList.add("item");
  if (image != false) {
    itemElement.classList.add("item-with-image");
    let imageElement = document.createElement("img");
    imageElement.src = image;
    itemElement.appendChild(imageElement);
  }

  let titleElement = document.createElement("h2");
  titleElement.textContent = title;
  itemElement.appendChild(titleElement);

  let contentElement = document.createElement("p");
  contentElement.innerHTML = content; // Do innerHTML to be able to use <br>
  itemElement.appendChild(contentElement);

  container.appendChild(itemElement);

  return itemElement;
}

function fillPage(obj) {
  for (let i in obj) {
    let item = obj[i];
    if (item.image != undefined) {
      createItem(item.title, item.content, item.image);
    } else {
      createItem(item.title, item.content);
    }
  }
}

function clearPage() {
  let items = document.querySelectorAll(".item:not(.title)");
  items.forEach((i) => {
    i.remove();
  });
}

function updateTitle(text) {
  let title = document.querySelector(".title > h1");
  title.textContent = text;
}

function loadPage(page) {
  homeButton.classList.remove("active");
  menuButton.classList.remove("active");
  aboutButton.classList.remove("active");
  switch (page) {
    case 0:
      clearPage();
      fillPage(pageContent[0]);
      updateTitle("Welcome to the Black Mesa Cafeteria");
      homeButton.classList.add("active");
      break;
    case 1:
      clearPage();
      fillPage(pageContent[1]);
      updateTitle("Our Menu");
      menuButton.classList.add("active");
      break;
    case 2:
      clearPage();
      fillPage(pageContent[2]);
      updateTitle("About Us");
      aboutButton.classList.add("active");
      break;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadPage(0);
});

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    console.log(e.target.id);
    switch (e.target.id) {
      case "home":
        loadPage(0);
        break;
      case "menu":
        loadPage(1);
        break;
      case "about":
        loadPage(2);
        break;
    }
  });
});
