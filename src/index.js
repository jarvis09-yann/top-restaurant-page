import "./style.css";
import casseroleGIF from "./assets/hl_casserole.gif";
const contentElement = document.querySelector("#content");
const homeButton = document.querySelector("#home");

const firstPageContent = [
  {
    title: "About Us",
    content:
      "Fueling the finest minds in theoretical physics, anomalous materials, and interdimensional exploration since 1989. Whether you're here for a quick coffee before a resonance cascade or a full meal after a long containment breach, we've got you covered.",
  },
  {
    title: "Today's special: Magnusson's casserole!",
    content:
      "Fueling the finest minds in theoretical physics, anomalous materials, and interdimensional exploration since 1989. Whether you're here for a quick coffee before a resonance cascade or a full meal after a long containment breach, we've got you covered.",
    image: casseroleGIF,
  },
  {
    title: "Opening Hours",
    content:
      "The Black Mesa cafeteria is open 24/7 for your sustenance needs. Exceptions may apply in case of emergencies such as: ressonance cascades, Xen invasions, Nuclear war, anomalous materials spills, rogue AI incidents or in case of microwave casserole spontaneous combustion.",
  },
];

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
  contentElement.textContent = content;
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

// createItem("Test", "Lorem Ipsum", casseroleGIF, contentElement);

document.addEventListener("load", fillPage(firstPageContent));
homeButton.addEventListener("click", () => {
  clearPage();
  fillPage(firstPageContent);
});
