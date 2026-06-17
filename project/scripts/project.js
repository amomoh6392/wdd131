const universities = [
    {
        name: "Technical University of Munich",
        city: "Munich",
        description: "One of Germany's leading universities for science and technology.",
        institutiontype: "public University"
    },
    {
        name: "Heidelberg University",
        city: "Heidelberg",
        description: "Germany's oldest university with a strong international reputation.",
        institutiontype: "public University"
    },
    {
        name: "Ludwig Maximilian University",
        city: "Munich",
        description: "A top-ranked public research university.",
        institutiontype: "public University"
    },
    {
        name: "Heidelberg University",
        city: "Heidelberg",
        description: "Germany's oldest university with a strong international reputation.",
        institutiontype: "public University"
    }
];
function displayUniversities() {
    const container = document.querySelector("#university-container");

    container.innerHTML = "";

    universities.forEach(university => {
        container.innerHTML += `
            <article class="university-card">
                <h3>${university.name}</h3>
                <p><strong>Location:</strong> ${university.city}</p>
                <p><strong>Description:</strong> ${university.description}</p>
                <p><strong>Type:</strong> ${university.institutiontype}</p>
            </article>
        `;
    });
}

displayUniversities();
const studyTips = [
    "Start your university applications early.",
    "Research scholarship opportunities before applying.",
    "Learn basic German phrases before arriving.",
    "Keep digital copies of all important documents."
];
document.querySelector("#new-tip").addEventListener("click", displayStudyTip);
function displayStudyTip() {
    const tipElement = document.querySelector("#study-tip");

    const randomIndex = Math.floor(Math.random() * studyTips.length);

    tipElement.textContent = studyTips[randomIndex];
}

displayStudyTip();

const visitCount = Number(localStorage.getItem("visits")) || 0;

localStorage.setItem("visits", visitCount + 1);

document.querySelector("#visit-count").textContent =
    `You have visited this page ${visitCount + 1} times.`;
