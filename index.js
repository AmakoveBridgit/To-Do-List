
console.log("TO-DO");
const todo= document.getElementById('toDoList');
const listTask = todo.textContent;
console.log(listTask);
fetch('https://dummyjson.com/todos')
   .then(response => response.json())
   .then(data => console.log(data))
   .catch(error => console.error(error));



var tasks = [];

function addTask(task) {
  tasks.push(task);
}

function deleteTask(index) {
  tasks.splice(index, 1);
}

function displayTasks() {
  var ul = document.getElementById("toDoList").querySelector("ul");
  for (var i = 0; i < tasks.length; i++) {
    var li = document.createElement("li");
    li.textContent = tasks[i];
    ul.appendChild(li);
  }
}

var addButton = document.getElementById("addButton");
addButton.addEventListener("click", function() {

  var task = document.getElementById("taskInput").value;

  addTask(task);

  //
  displayTasks();
});

var deleteButton = document.getElementById("deleteButton");
deleteButton.addEventListener("click", function() { 
  var index = document.getElementById("taskIndex").value;
  deleteTask(index);
  displayTasks();
});