let addTodoButton = document.querySelector(".add-todo");
let todoInput = document.querySelector(".todo-input");
let todosList = document.querySelector(".todos-list-container");


// attach click event on addTodoButton

todoInput.addEventListener("keypress",function(e) {
    if(e.key == "Enter") {
        addTodo();
    }
});
addTodoButton.addEventListener("click",function(){
addTodo();
});

// in one code 
function addTodo(e) {
    let todoInputValue = todoInput.value;
    if(todoInputValue) {
        // console.log(todoInput.value);
        appendTodo(todoInputValue);
        // it will empty the todoInput
        todoInput.value = "";
    }
}

function appendTodo(todo) {
    let todoItemDiv =  document.createElement("div");
    todoItemDiv.classList.add("todo-item");
    // <div class="todo-item"></div>

    let pTag = document.createElement("p");
    pTag.classList.add("todo-input");
    pTag.textContent = todo;

    // <p class="todo-input">learn css</p>

    let deleteTodoButton = document.createElement("button");
    deleteTodoButton.classList.add("delete-todo");
    deleteTodoButton.textContent = "Delete";
    // <button class="delete-todo"> Delete </button>

    deleteTodoButton.addEventListener("click",deleteTodo);

    todoItemDiv.append(pTag);
    todoItemDiv.append(deleteTodoButton);

    todosList.append(todoItemDiv);
}

function deleteTodo(e){
    e.target.parentNode.remove();
    // console.log(e);
 }

// in differn code
// function addTodo(e) {
//     if(e.key == "Enter") {
//         let todoInputValue = todoInput.value;
//         console.log(todoInputValue);    
//         todoInput.value = "";
//     }
// }



// function addTodo() {
//     let todoInputValue = todoInput.value;
//     // falsy value => "" ,0,false,undefined,null,NaN
//     if(todoInputValue) {
//         console.log(todoInputValue);

//         // it will empty the todoInput
//         todoInput.value = "";
//     }
// }