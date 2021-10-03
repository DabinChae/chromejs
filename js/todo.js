const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input");
let toDos = [];

function saveToDos(){
    localStorage.setItem("todos",JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !==parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText="X";
    
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newTodo.text;
    console.log(li);
    toDoList.appendChild(li);

    button.addEventListener("click",deleteToDo);

}


function hanldeToDoSubmit(event){
    event.preventDefault();
    // console.log(toDoInput.value);
    const newTodo = toDoInput.value;
    const newToDoObj = {
        text: newTodo,
        id:Date.now(),
    }
    toDos.push(newToDoObj);
    toDoInput.value = "";

    paintToDo(newToDoObj);
    saveToDos()

}

toDoForm.addEventListener("submit",hanldeToDoSubmit)

const savedToDos = localStorage.getItem("todos");

if(savedToDos!==null){
    parseToDos = JSON.parse(savedToDos);
    toDos = parseToDos;
    parseToDos.forEach(paintToDo);
}