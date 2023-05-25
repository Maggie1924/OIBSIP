// Retrieve the necessary elements from the HTML
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const notCompletedTasks = document.getElementById("notCompletedTasks");
const completedTasks = document.getElementById("completedTasks");

// Function to add a task to the not completed tasks list
function addTask() {
  const taskText = taskInput.value;
  if (taskText !== "") {
    const taskItem = document.createElement("li");
    taskItem.innerText = taskText;

    const tickBtn = document.createElement("button");
    tickBtn.innerText = "✔";
    tickBtn.classList.add("button", "tick");
    tickBtn.addEventListener("click", function () {
      taskItem.classList.toggle("completed");
      completedTasks.appendChild(taskItem);
      tickBtn.remove();
    });

    const crossBtn = document.createElement("button");
    crossBtn.innerText = "✖";
    crossBtn.classList.add("button", "cross");
    crossBtn.addEventListener("click", function () {
      taskItem.remove();
    });

    taskItem.appendChild(tickBtn);
    taskItem.appendChild(crossBtn);
    notCompletedTasks.appendChild(taskItem);
    taskInput.value = "";
  }
}

// Event listener for the add task button
addTaskBtn.addEventListener("click", addTask);
