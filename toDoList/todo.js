const todoInput = document.querySelector('.todo-input');
const todoButton = document.getElementById('todo-button');
const todoList = document.querySelector('.todo-list');


 // event listner

 todoButton.addEventListener('click', addTodo);
 todoList.addEventListener('click', deleteCheck);





 //function

 function addTodo(event){
    event.preventDefault();

    // todo div
    const todoDiv= document.createElement("div");
    todoDiv.classList.add("todo")
    
    // li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-items')
    todoDiv.appendChild(newTodo);

    //button
    const completedButtons = document.createElement('button');
    completedButtons.innerHTML = '<i class="fa-solid fa-check"></i>';
    completedButtons.classList.add("complete-btn");
    todoDiv.appendChild(completedButtons);

    const trashButtons = document.createElement('button');
    trashButtons.innerHTML = ' <i class = "fas fa-trash"></i>';
    trashButtons.classList.add("trash-btn");
    todoDiv.appendChild(trashButtons);

    //appent to list
    todoList.appendChild(todoDiv);

    //clear input valye
    todoInput.value = "";
}

function deleteCheck(e){
    const item = e.target;

   if(item.classList[0]== "trash-btn"){
    const todo = item.parentElement;
    todo.classList.add("fall");
    setTimeout(function(){
        todo.remove();
        }, 500);
  
   }

   if(item.classList[0]== "complete-btn"){
    const todo = item.parentElement;
    todo.classList.toggle("completed");
   }
}


