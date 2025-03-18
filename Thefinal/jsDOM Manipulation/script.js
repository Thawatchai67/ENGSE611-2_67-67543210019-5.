const taskInput = document.querySelector("#taskInput");
const taskType = document.querySelector("#taskType");
const addButton = document.querySelector("#add-button");
const taskList = document.querySelector("#taskList");

let tasks = [];

function addTask() {
  const taskText = taskInput.value.trim();
  const taskCategory = taskType.value;

  if (taskText.length > 0) {
    const task = {
      id: Date.now(),
      text: taskText,
      category: taskCategory,
      completed: false,
    };

    tasks.push(task);
    taskInput.value = "";

    renderTask();
  }
}

function deleteTask(id) {
  if (confirm("คุณแน่ใจหรือไม่ว่าต้องการลบรายการนี้?")) {
    tasks = tasks.filter((task) => task.id !== id);
    renderTask();
  }
}

function toggleCompleted(id) {
  tasks = tasks.map((task) => {
    if (task.id === id) {
      task.completed = !task.completed;
    }
    return task;
  });
  renderTask();
}

function renderTask() {
  taskList.innerHTML = "";

  tasks.forEach((task) => {
    const taskItem = document.createElement("li");
    const taskText = document.createElement("span");
    const taskDeleteButton = document.createElement("button");

    taskText.textContent = task.text;
    taskDeleteButton.textContent = "Delete";

    taskDeleteButton.addEventListener("click", () => deleteTask(task.id));


    const taskImage = document.createElement("img");
    taskImage.src = task.category === 'work' ? 'https://picsum.photos/80/80?random=1' : 
                     task.category === 'personal' ? 'https://picsum.photos/80/80?random=2' :
                     'https://picsum.photos/80/80?random=3';
    taskImage.alt = task.category;
    taskImage.style.width = "50px";
    taskImage.style.height = "50px";
    taskImage.style.borderRadius = "50%";
    taskImage.style.marginRight = "10px";

    if (task.completed) {
      taskItem.classList.add("completed");
    }

    taskItem.addEventListener("click", () => toggleCompleted(task.id));

    taskItem.appendChild(taskImage);
    taskItem.appendChild(taskText);
    taskItem.appendChild(taskDeleteButton);

    taskList.appendChild(taskItem);

addButton.addEventListener("click", addTask);
renderTask();
