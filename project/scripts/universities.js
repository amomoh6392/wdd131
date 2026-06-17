const universities = [
    {
        name: "Technical University of Munich",
        city: "Munich",
        description: "One of Germany's leading universities for science and technology.",
        institutiontype: "public"
    },
    {
        name: "Heidelberg University",
        city: "Heidelberg",
        description: "Germany's oldest university with a strong international reputation.",
        institutiontype: "public"
    },
    {
        name: "Ludwig Maximilian University",
        city: "Munich",
        description: "A top-ranked public research university.",
        institutiontype: "public"
    },
    {
        name: "University of Freiburg",
        city: "Freiburg im Breisgau",
        description: "A modern university noted for interdisciplinary research and a tradition of academic excellence spanning the humanities, sciences, engineering, medicine, and law.",
        institutiontype: "public"
    },
    {
        name: "Karlsruhe Institute of Technology (KIT)",
        city: "Karlsruhe",
        description: "IT combines the tasks of a university of the state of Baden-Württemberg with those of a research center of the Helmholtz Association in the areas of research, teaching, and innovation.",
        institutiontype: "public"
    },
    {
        name: "RWTH Aachen University",
        city: "Aachen",
        description:"RWTH Aachen was established in 1870 during the industrialization of Germany, initially focusing on mechanical engineering.",
        institutiontype: "public"
    },
    {
        name: "Jacobs University Bremen",
        city: "Bremen",
        description: "An international private research university.",
        institutiontype: "private"
    },
    {
        name: "Constructor University",
        city: "Bremen",
        description: "An international private university offering English-taught programs in science, engineering, and social sciences.",
        institutiontype: "private"
    },
    {
        name: "SRH University Heidelberg",
        city: "Heidelberg",
        description: "A private university known for practical, career-focused degree programs and international students.",
        institutiontype: "private"
    },
    {
        name: "Bard College Berlin",
        city: "Berlin",
        description: "A private liberal arts college offering English-language undergraduate programs.",
        institutiontype: "private"
    }

];
function displayUniversities(universityList) {

    const container =
        document.querySelector("#universities-container");

    let html = "";

    universityList.forEach(university => {

        html += `
            <article class="university-card">
                <h3>${university.name}</h3>
                <p><strong>Location:</strong> ${university.city}</p>
                <p><strong>Description:</strong> ${university.description}</p>
                <p><strong>Type:</strong> ${university.institutiontype === "public" ? "Public University" : "Private University"}</p>
            </article>
        `;
    });

    container.innerHTML = html;
}
function filterUniversities() {

    const selectedType =
        document.querySelector("#university-filter").value;

    let filteredUniversities;

    if (selectedType === "all") {
        filteredUniversities = universities;
    } else {
        filteredUniversities = universities.filter(
            university =>
                university.institutiontype === selectedType
        );
    }

    displayUniversities(filteredUniversities);
}
document
    .querySelector("#university-filter")
    .addEventListener("change", filterUniversities);

displayUniversities(universities);