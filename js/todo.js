const toDoForm = document.getElementById('todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.getElementById('todo-list');

const TODOS_KEY = "todos";
let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(todoId) {
    toDos = toDos.filter(todo => todo.id != todoId);
    saveToDos();
}

function loadToDos() {
    const savedToDos = localStorage.getItem(TODOS_KEY);
    if (savedToDos !== null) {
        const parsedToDos = JSON.parse(savedToDos);
        toDos = parsedToDos;
        parsedToDos.forEach(printTodo);
    }
}

function printTodo(newTodoObj) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    const button = document.createElement('button');

    li.id = newTodoObj.id;
    span.innerHTML = newTodoObj.text;
    button.innerHTML = 'X';

    button.addEventListener('click', () => {
        li.remove()
        deleteToDo(newTodoObj.id);
    });

    li.appendChild(span);
    li.appendChild(button);

    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = '';
    const newTodoObj = {
        id: Date.now(),
        text: newTodo
    };
    toDos.push(newTodoObj);
    printTodo(newTodoObj);

    saveToDos();
}

toDoForm.addEventListener('submit', handleToDoSubmit);

window.addEventListener('load', loadToDos);