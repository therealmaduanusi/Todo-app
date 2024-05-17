function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskList = document.getElementById("taskList");

  if (taskInput.value === "") {
    alert("Please enter a task!");
    return;
  }

  var li = document.createElement("li");
  var taskText = document.createElement("span");
  taskText.textContent = taskInput.value;

  var editInput = document.createElement("input");
  editInput.type = "text";
  editInput.style.display = "none";

  var editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.classList.add("edit-button");
  editButton.onclick = function() {
    if (editInput.style.display === "none") {
      taskText.style.display = "none";
      editInput.value = taskText.textContent;
      editInput.style.display = "inline-block";
      deleteBtn.style.display = "none"
    } else {
      taskText.textContent = editInput.value;
      editInput.style.display = "none";
      taskText.style.display = "inline-block";
      deleteBtn.style.display = "inline-block"
    }
  };
  
  var deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'delete';
  deleteBtn.onclick = function () {
    taskList.removeChild(li)
  }

  li.appendChild(taskText);
  li.appendChild(editInput);
  li.appendChild(editButton);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  taskInput.value = "";
}