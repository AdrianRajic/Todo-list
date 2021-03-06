const todoInput = document.querySelector('.todo_input');
const todoButton = document.querySelector('.todo_button');
const todoList = document.querySelector('.todo_list');
todoButton.addEventListener('click', addTodo);

function addTodo(event)
{
    event.preventDefault();
    let inputValue = todoInput.value;
    let text = document.createTextNode(inputValue);
    let list = document.createElement("li");
    list.appendChild(text);
    if (inputValue === '') {
        alert("Error!");
    }
    else {
        todoList.appendChild(list).classList.add("todo");
    }
    todoInput.value = "";
}
