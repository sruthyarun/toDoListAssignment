// Select elements
let addTaskBtn = document.getElementById("addTaskBtn");
let taskInput = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");

// Add Task Event
addTaskBtn.addEventListener("click", function () {

   
    let taskText = taskInput.value.trim();

    // Validation
    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    // Create li
    let li = document.createElement("li");
    li.className = "list-group-item mt-2";

    // Create span for task text
    let span = document.createElement("span");
    span.innerText = taskText;

    // Create div for buttons
    let btnDiv = document.createElement("div");
    btnDiv.className = "btn-group";


    // Toggle strike
    span.addEventListener("click", function () {
        span.classList.toggle("completed");
        editBtn.disabled = span.classList.contains("completed");
        deleteBtn.disabled = span.classList.contains("completed");
    });

    // Create edit button
    let editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.className = "btn btn-warning btn-sm";


    // Create delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.className = "btn btn-danger btn-sm";

    // Delete task
    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

    // Edit task

    editBtn.addEventListener("click", function () {

        const updatedTask = prompt("Edit your task", span.textContent);

        if (updatedTask !== null && updatedTask !== "") {
            span.textContent = updatedTask;
        }
    });



    // Append elements
    taskList.appendChild(li);

    li.appendChild(span);
    li.appendChild(btnDiv);
    btnDiv.appendChild(editBtn);
    btnDiv.appendChild(deleteBtn);

    // Clear input
    taskInput.value = "";


});