const todoInput = document.querySelector(".todo-input");
const todoList = document.querySelector(".todo-list");
const deleteAll = document.querySelector(".last-btn");


todoList.addEventListener("keyup",saveNew);
todoList.addEventListener("click", deleteTodo);
todoList.addEventListener("dblclick", edit);
todoInput.addEventListener("keyup", addTodo);


function addTodo(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const newTodo = document.createElement("input");
    const completeRadio = document.createElement("input");
    completeRadio.type = "checkbox";
    completeRadio.classList.add("complete-btn");
    todoDiv.appendChild(completeRadio);

    newTodo.disabled= true;
    newTodo.value = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    const btnDiv = document.createElement("div");
    btnDiv.classList.add("btn-div");
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fas fa-times"></i>';
    deleteButton.classList.add("delete-btn");
    btnDiv.appendChild(deleteButton);
    todoDiv.appendChild(btnDiv);

    todoList.appendChild(todoDiv);
    todoInput.value = "";

    deleteAll.style.display = "block";
  }
}


function deleteTodo(event) {
    const todos = todoList.childNodes;
  const e = event.target;
  if (e.classList[0] === "delete-btn") {
    e.parentElement.parentElement.remove();
  }

  if (e.classList[0] === "complete-btn") {
    if (e.checked) {
      e.parentElement.classList.add("checked");
    } else {
      e.parentElement.classList.remove("checked");
    }
  }

  if(todos.length===1){
    deleteAll.style.display = "none";
  }

}


function edit(event){
    const e = event.target;
    if(e.classList[0] === "todo-item"){
        e.disabled= !e.disabled;
    }
}

function saveNew(event){
    const e =event.target;
    if(e.classList[0] === "todo-item"){
    if (event.keyCode === 13) {
        e.disabled = !e.disabled;
    }
}
}

function showCompleted() {
  const todos = todoList.childNodes;
  for(i=1;i<todos.length;i++){
    if (todos[i].classList.contains("checked")) {
        todos[i].style.display = "flex";
      } else {
        todos[i].style.display = "none";
      }
  }
}

function showAll() {
  const todos = todoList.childNodes;
  for(i=1;i<todos.length;i++){
      todos[i].style.display = "flex";
  }
}

function showActive() {
  const todos = todoList.childNodes;
  for(i=1;i<todos.length;i++){
    if (todos[i].classList.contains("checked")) {
        todos[i].style.display = "none";
      } else {
        todos[i].style.display = "flex";
      }
  }
}

function deleteCompleted() {
    const todos = todoList.childNodes;
    for(i=todos.length-1;i>0;i--){
      if (todos[i].classList.contains("checked")) {
          todos[i].remove();
        }
    }

    if(todos.length===1){
        deleteAll.style.display = "none";
      }
    // var todo = document.getElementsByClassName("checked");
    // todo.remove();
  }
