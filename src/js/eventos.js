import { Todo }      from "./clases/tareas.js";
import { todoList }  from "../index.js";
import { tasksHTML } from "./funciones.js";

// Variables del DOM
const $input   = document.getElementById("header__input"),
      $none    = document.querySelector('.none'),
      $list    = document.getElementById('list'),
      $btnNone = document.querySelector('.btn-none');

// Evento para el input de las tareas
export const inputEvent = $input.addEventListener("keyup", (e) => {
  // console.log(e);
  if (
    (e.keyCode === 13 && $input.value.length > 0) ||
    (e.key === "Enter" && $input.value.length > 0)
  ) {
      
    // console.log($input.value);
    
    const eNewTask = new Todo($input.value);
    todoList.newTask(eNewTask);

    // console.log(todoList)

    // Método que muestra la tarea insertada en el HTML la tarea insertada
    tasksHTML(eNewTask);
    $none.classList.remove("none");
    $input.value = ""; 

  }
});

// Evento click
$list.addEventListener('click', (e) => {
  // console.log('click')
  // console.log(e);
  // console.log(e.target.localName);
  const targetlocalName = e.target.localName;
  const fatherElement = e.target.parentElement.parentElement;
  const taskId = fatherElement.getAttribute('data-id');
  
  // console.log(fatherElement.getElementByClassName('completed'))
  // console.log( fatherElement )
  // console.log(taskId)

  if(targetlocalName.includes('input')){
    todoList.checkCompleted(taskId);
    fatherElement.classList.toggle('completed')
  }
  
  const clasesCompleted = document.querySelectorAll('.completed')
  
  if(clasesCompleted.length > 0){
    $btnNone.classList.remove('btn-none');
  }else{
    $btnNone.classList.add('btn-none');
  }
  // console.log(clasesCompleted.length)
  
  
})
