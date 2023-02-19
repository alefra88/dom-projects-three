const d = document,
  $addTask = d.getElementById("add-task"),
  $taskContainer = d.getElementById("task-container"),
  $inputTask = d.getElementById("input-task");

// Event listener for add button

$addTask.addEventListener("click", () => {
  let task = d.createElement("div"),
    li = d.createElement("li");
  task.classList.add("task");
  li.innerText = `${$inputTask.value}`;
  task.appendChild(li);

  let checkButton = d.createElement("button");
  checkButton.innerHTML = `<i class="fa-solid fa-check"></i>`;
  checkButton.classList.add("check-task");
  task.appendChild(checkButton);

  let deleteButton = d.createElement("button");
  deleteButton.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
  deleteButton.classList.add("delete-task");
  task.appendChild(deleteButton);

  if ($inputTask.value === "") {
    alert("please enter a Task");
  } else {
    $taskContainer.appendChild(task);
  }

  $inputTask.value = "";
  checkButton.addEventListener("click", () => {
    checkButton.parentElement.style.textDecoration = "line-through";
  });
  deleteButton.addEventListener("click", (e) => {
    let target = e.target;

    target.parentElement.parentElement.remove();
  });
});
