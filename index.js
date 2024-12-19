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
        newTodo.textContent = ` ${schoolInput.value}`;
        newTodo.prepend(checkbox);
        
        schoolList.appendChild(newTodo);

        // Save to localStorage
        const savedSchoolTodos = JSON.parse(localStorage.getItem('schoolTodos')) || [];
        // || [] is to return an empty array if JSON.parse returns null
        savedSchoolTodos.push(schoolInput.value);
        localStorage.setItem("schoolTodos", JSON.stringify(savedSchoolTodos));

        schoolInput.value = "";
    }
    
})

// Load saved todos on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedSchoolTodos = JSON.parse(localStorage.getItem('schoolTodos')) || [];
    const savedHomeTodos = JSON.parse(localStorage.getItem("homeTodos")) || [];
    // || [] is to return an empty array if JSON.parse returns null

    savedSchoolTodos.forEach( (todo) => {
        const newTodo = document.createElement("li");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        newTodo.style.listStyle = "none";

        newTodo.textContent = ` ${todo}`;
        newTodo.prepend(checkbox);
        schoolList.appendChild(newTodo);
    });

    savedHomeTodos.forEach( (todo) => {
        const newTodo = document.createElement("li");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        newTodo.style.listStyle = "none";

        newTodo.textContent = ` ${todo}`;
        newTodo.prepend(checkbox);
        homeList.appendChild(newTodo);
    });
});

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

        // Save to memory
        const savedHomeTodos = JSON.parse(localStorage.getItem("homeTodos")) || [];
        savedHomeTodos.push(homeInput.value);

        localStorage.setItem("homeTodos", JSON.stringify(savedHomeTodos));

        homeInput.value = "";
    }
})


