const selected = document.querySelector(".icon");
const input = document.querySelector("#input-gender");
const optionsContainer = document.querySelector(".options-container");

const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
    optionsContainer.classList.toggle("active");
});

optionsList.forEach(e => {
    e.addEventListener("click", () => {

        input.value = e.querySelector("label").innerHTML;
        optionsContainer.classList.remove("active");
    });
});


