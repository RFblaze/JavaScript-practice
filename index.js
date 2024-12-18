const schoolSubmit = document.getElementById("schoolSubmit");
const schoolList = document.getElementById("schoolList");
const schoolInput = document.getElementById("schoolInput");

schoolSubmit.addEventListener("click", (event) => {
    event.preventDefault();

    if (schoolInput.value != ""){
        const newTodo = document.createElement("li");
        newTodo.innerHTML = schoolInput.value;
        schoolList.appendChild(newTodo);

        schoolInput.value = "";
    }
    
})

const homeSubmit = document.getElementById("homeSubmit");
const homeList = document.getElementById("homeList");
const homeInput = document.getElementById("homeInput");

homeSubmit.addEventListener("click", (event) => {
    event.preventDefault();

    if (homeInput.value != ""){
        const newTodo = document.createElement("li");
        newTodo.innerHTML = homeInput.value;
        homeList.appendChild(newTodo);

        homeInput.value = "";
    }
    

})


