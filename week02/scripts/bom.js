const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener('click', function () {
    const chapter = input.value.trim();
    if (chapter !== "") {
        const items = list.querySelectorAll("li");

        let exists = false;
        items.forEach(function (item) {
            const text = item.firstChild.textContent;

            if (text === chapter) {
                exists = true;
            }
        });

       
        if (!exists) {
            const li = document.createElement("li");
            li.textContent = input.value;
            
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "❌";

            li.appendChild(deleteButton);
            li.appendChild(deleteButton);
            list.appendChild(li);
            deleteButton.addEventListener("click", function () {
                list.removeChild(li);
                input.focus();
            });
            
        } else {
            alert("This chapter already exists!");
        }
        input.value = "";
    }
    input.focus();
});