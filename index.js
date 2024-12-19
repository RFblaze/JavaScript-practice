const schoolSubmit = document.getElementById("schoolSubmit");
const schoolList = document.getElementById("schoolList");
const schoolInput = document.getElementById("schoolInput");

schoolSubmit.addEventListener("click", (event) => {
    event.preventDefault();

    if (schoolInput.value != "") {
        const newTodo = document.createElement("li");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        newTodo.style.listStyleType = "none"; // Remove the bullet point
        newTodo.innerHTML = ` ${schoolInput.value}`;
        newTodo.prepend(checkbox);
        schoolList.appendChild(newTodo);

        schoolInput.value = "";
    }
    
})

const homeSubmit = document.getElementById("homeSubmit");
const homeList = document.getElementById("homeList");
const homeInput = document.getElementById("homeInput");

homeSubmit.addEventListener("click", (event) => {
    event.preventDefault();

    if (homeInput.value != "") {
        const newTodo = document.createElement("li");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        newTodo.style.listStyleType = "none"; // Remove the bullet point
        newTodo.innerHTML = ` ${homeInput.value}`;
        newTodo.prepend(checkbox);
        homeList.appendChild(newTodo);

        homeInput.value = "";
    }
    
    
    

})


