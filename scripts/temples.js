document.getElementById("currentyear").textContent = new Date().getFullYear();

document.getElementById("lastmodified").textContent = `Last Modified: ${document.lastModified}`;

const menuButton = document.querySelector("#menu");
const navigation = document.querySelector("nav");
menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    menuButton.classList.toggle("open");

    const isOpen = navigation.classList.contains("open");
    menuButton.setAttribute("aria-expanded", isOpen);

    menuButton.textContent = isOpen ? "✖" : "☰";
});