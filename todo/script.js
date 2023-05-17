// Get the task list element
const taskList = document.getElementById('task-list');

// Retrieve tasks from local storage
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Function to display tasks
// Function to display tasks
function displayTasks() {
    taskList.innerHTML = '';
    for (let i = 0; i < tasks.length; i++) {
      const task = tasks[i];
      const li = document.createElement('li');
      li.innerText = task;
      li.setAttribute('data-index', i);
      const deleteBtn = document.createElement('button');
      deleteBtn.innerText = 'Delete';
      deleteBtn.addEventListener('click', deleteTask);
      li.appendChild(deleteBtn);
      const editBtn = document.createElement('button');
      editBtn.innerText = 'Edit';
      editBtn.addEventListener('click', editTask);
      li.appendChild(editBtn);
      taskList.appendChild(li);
    }
  }
  

// Function to add a task
function addTask(event) {
  event.preventDefault();
  const newTask = document.getElementById('new-task');
  const taskText = newTask.value.trim();
  if (taskText !== '') {
    tasks.push(taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    newTask.value = '';
    displayTasks();
  }
}

// Function to edit a task
function editTask(event) {
  const li = event.target.closest('li');
  const index = li.getAttribute('data-index');
  const taskText = prompt('Edit Task', tasks[index]);
  if (taskText !== null) {
    tasks[index] = taskText.trim();
    localStorage.setItem('tasks', JSON.stringify(tasks));
    displayTasks();
  }
}

// Function to delete a task
function deleteTask(event) {
  const li = event.target.closest('li');
  const index = li.getAttribute('data-index');
  tasks.splice(index, 1);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  displayTasks();
}

// Attach event listeners
const addBtn = document.getElementById('add-btn');
addBtn.addEventListener('click', addTask);
taskList.addEventListener('click', editTask);

// Display initial tasks
displayTasks();
