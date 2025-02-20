document.addEventListener("DOMContentLoaded", () => {
    //get all necessary DOM elements

    //form and relevant input fields
    const newTaskForm = document.getElementById("create-task-form");
    const newTaskDescription = document.getElementById("create-task-description");
    const newTaskPriority = document.getElementById("create-task-priority");
    
    //ul where new tasks will leave in the DOM
    const newTaskUl = document.getElementById("tasks");

    //attach event listeners
    newTaskForm.addEventListener("submit", createNewTask);
});

const newTask = event => {
    event.preventDefault();
    //stop form from trying to submit
    const newTaskDescription = document.getElementById("new-task-description");
    const newTask = document.createElement("li");
    newTask.innerText = newTaskDescription.value;

    appendNewTask(newTask);
    event.target.reset();

};

const appendNewTask = task => {
    document.getElementById("tasks").appendChild(task);
};