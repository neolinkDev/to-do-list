import { Todo } from "./clases/tareas";
import { todoList } from "..";

// VARIABLES DEL DOM
const $list = document.getElementById("list"),
  $input = document.getElementById("header__input"),
  $allChecked = document.getElementById('all-checked');

const $none = document.querySelector(".none"),
  $btnNone = document.querySelector(".btn-none");

// Mostrando en el HTML la tarea creada
export const showTaskHTML = (showTask) => {
  const HTMLtask = `
    <li class="${showTask.completed ? "completed" : ""}" data-id="${
    showTask.id
  }" >
        <div class="divView">
            <input type="checkbox" class="toggle-check-list" ${
              showTask.completed ? "checked" : ""
            } >
            <label>${showTask.todoTask}</label>
            <button class="btn-x"></button>
        </div>
    </li>`;

  const $div = document.createElement("div"); // creamos el div donde se inserta el HTMLtask
  $div.innerHTML = HTMLtask;
  $list.append($div.firstElementChild); // inserta el primer hijo del $div

  return $div.firstElementChild;
};

// Función evento keyup, inputEvent
export const fnInputEvent = (e) => {
  if (
    (e.keyCode === 13 && $input.value.length > 0) ||
    (e.key === "Enter" && $input.value.length > 0)
  ) {

    if ($allChecked) $allChecked.checked = false;
    // console.log($input.value)
    const newTask = new Todo($input.value);

    // inserta la tarea en el []
    todoList.newTask(newTask);
    // console.log(todoList);

    // muestra en el html la tarea
    showTaskHTML(newTask);

    $none.classList.remove("none");
    $input.value = "";
  }
};

// Función evento click, listEvent
export const fnList = (e) => {
  const targetlocalName = e.target.localName,
    fatherElement = e.target.parentElement.parentElement,
    taskId = fatherElement.getAttribute("data-id");

  // console.log(taskId)

  if (targetlocalName.includes("input")) {
    todoList.checkCompleted(taskId);
    fatherElement.classList.toggle("completed");
  } else if (targetlocalName.includes("button")) {
    todoList.deleteTask(taskId);
    $list.removeChild(fatherElement);
  }

  // [] con el número de tareas completadas
  const clasesCompleted = document.querySelectorAll(".completed");

  // si hay minimo una tarea marcada aparece el boton de limpiar completados si no, no se se muestra
  if (clasesCompleted.length > 0) {
    $btnNone.classList.remove("btn-none");
  } else {
    $btnNone.classList.add("btn-none");
  }

  console.log(todoList); // todoList.todos
  
  // desmacar el checkbox principal al borrar todas las tareas y oculta las opciones
  if(todoList.todos.length === 0){
    $none.classList.add("none");
    $allChecked.checked = false;
  }
  // uncheck(todoList);
};

// desmacar el checkbox principal al borrar todas las tareas y oculta las opciones
// export function uncheck(todoList){
//   if(todoList.todos.length === 0){
//     $none.classList.add("none");
//     $allChecked.checked = false;
//   }
// }

// Función evento change, allCheckedEvent
export function fnAllCheckedEvent(e){
  const allCheckboxes = document.querySelectorAll("input[type='checkbox']");

  // marcando o desmarcando los checkbox
  if (this.checked) {
    for (let i = 0; i < allCheckboxes.length; i++) {

      allCheckboxes[i].checked = true;

    }
  } else {
    for (let i = 0; i < allCheckboxes.length; i++) {

      allCheckboxes[i].checked = false;
      
    }
  }

  let composed = e.composedPath();

  // HTML collection que tiene las `li` de las tareas
  const $lis = composed[1].children[2].children;
  console.log($lis);
  
  const $inputsCheck = document.querySelectorAll(".toggle-check-list");

  for (let i = 0; i < $inputsCheck.length; i++) {
    if (!$inputsCheck[i].checked) {
      // $inputsCheck[i].checked = true;
      $lis[i].classList.remove("completed");
      $btnNone.classList.add("btn-none");
    } else {
      // $inputsCheck[i].checked = false;
      $lis[i].classList.add("completed");
      $btnNone.classList.remove("btn-none");
    }
  }
  
};

// Función que recorre el arreglo de tareas en orden inverso para eliminar las tareas en el HTML
export const fnDeleteCompleted = () => {
  
  for(let i = $list.children.length - 1; i >= 0; i--){

    const htmlTask = $list.children[i];

    // console.log(htmlTask)

    // `contains` comprueba si la clase indicada existe en el atributo de clase del elemento
    if(htmlTask.classList.contains('completed')){
      $list.removeChild( htmlTask );
    }
  }

}



// // import { inputEvent } from "./eventos-fns.js";

// // Variables del DOM
// // $ hace referencia a los id del DOM
// const $list = document.getElementById('list');

// // Mostrando en el HTML la tarea insertada
// export const tasksHTML = ( task ) => {

//     const $div = document.createElement('div');

//     const taskHTML = `
//     <li class="${ (task.completed) ? 'completed' : '' }" data-id="${ task.id }" >
//         <div class="divView">
//             <input type="checkbox" class="toggle-check-list" ${ ( task.completed ) ? 'checked' : '' } >
//             <label>${ task.task }</label>
//             <button class="btn-x"></button>
//         </div>
//     </li>
//     `;

//     $div.innerHTML = taskHTML;
//     $list.appendChild($div.firstElementChild);

//     return $div.firstElementChild;
// }
