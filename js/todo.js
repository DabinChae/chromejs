const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input");
const toDos = [];

function saveToDos(){
    localStorage.setItem("todos",JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText="X";
    
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newTodo;
    console.log(li);
    toDoList.appendChild(li);

    button.addEventListener("click",deleteToDo);

}


function hanldeToDoSubmit(event){
    event.preventDefault();
    // console.log(toDoInput.value);
    const newTodo = toDoInput.value;
    toDos.push(newTodo);
    toDoInput.value = "";
    paintToDo(newTodo);
    saveToDos()

}

toDoForm.addEventListener("submit",hanldeToDoSubmit)
