document.getElementById("currentyear").textContent = new Date().getFullYear();

document.getElementById("lastmodified").textContent = `Last Modified: ${document.lastModified}`;

const menuButton = document.querySelector("#menu");
const navigation = document.querySelector("nav");

menuButton.textContent = "☰";
    
menuButton.addEventListener("click", () => {
  
    navigation.classList.toggle("open");
    menuButton.classList.toggle("open");

    const isOpen = navigation.classList.contains("open");
    menuButton.setAttribute("aria-expanded", isOpen);

    menuButton.textContent = isOpen ? "✖" : "☰";
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005-08-07",
    area: 11500,
    imageUrl: "images/aba-nigeria-temple-lds-1636397-wallpaper.webp"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888-05-21",
    area: 74792,
    imageUrl:"images/manti-temple-768192-wallpaper.webp"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015-06-07",
    area: 96630,
    imageUrl:"images/payson-utah-temple-exterior-1416671-wallpaper.webp"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020-05-02",
    area: 6861,
    imageUrl:"images/yigo_guam_temple_2.webp"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974-11-19",
    area: 156558,
    imageUrl:"images/washington_dc_temple-exterior-2.webp"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986-01-10",
    area: 9600,
    imageUrl:"images/lima-peru-temple-evening-1075606-wallpaper.webp"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983-12-02",
    area: 116642,
    imageUrl:"images/mexico-city-temple-exterior-1518361-wallpaper.webp"
    },
  {
    templeName: "Accra Ghana Temple",
    location: "Accra Ghana, Ghana",
    dedicated: "2004-01-11",
    area: 17500,
    imageUrl: "images/accra-ghana-temple-758797-wallpaper.webp"
    },
  {
    templeName: "Anchorage Alaska Temple",
    location: "Anchorage Alaska, United States",
    dedicated: "1999-01-09",
    area: 235224,
    imageUrl:"images/anchorage-temple-lds-746769-wallpaper.webp"
  },
  {
    templeName: "Boise Idaho Temple",
    location: "Boise Idaho, United States",
    dedicated: "2012-11-18",
    area: 210395,
    imageUrl:"images/1-Boise-Idaho-Temple-1968984.webp"
  }
];
const container = document.querySelector("#temple-container");
function displayTemples(list) {
  container.innerHTML = "";

  list.forEach(temple => {
    const figure = document.createElement("figure");
    
    figure.innerHTML = `
      <h3>${temple.templeName}</h3>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Area:</strong> ${temple.area} sq ft</p>
      <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy"width="400" height="250">
    `;

    container.appendChild(figure);
  });
}
displayTemples(temples);

document.querySelector("#home").addEventListener("click", (e) => {
  e.preventDefault();
  displayTemples(temples);
});

document.querySelector("#old").addEventListener("click", (e) => {
  e.preventDefault();
  const filtered = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
  displayTemples(filtered);
});

document.querySelector("#new").addEventListener("click", (e) => {
  e.preventDefault();
  const filtered = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
  displayTemples(filtered);
});

document.querySelector("#large").addEventListener("click", (e) => {
  e.preventDefault();
  const filtered = temples.filter(t => t.area > 90000);
  displayTemples(filtered);
});

document.querySelector("#small").addEventListener("click", (e) => {
  e.preventDefault();
  const filtered = temples.filter(t => t.area < 10000);
  displayTemples(filtered);
});