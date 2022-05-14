// IMPORTANDO FUNCIONES
import { todoList } from "..";
import { fnAllCheckedEvent, fnDeleteCompleted, fnInputEvent, fnList } from "./funciones";

// VARIABLES DEL DOM
const $input = document.getElementById("header__input"),
    $list = document.getElementById('list'),
    $allChecked = document.getElementById('all-checked');

// EVENTOS
// Evento keyup del teclado para mostrar tarea al soltar tecla
export const inputEvent = $input.addEventListener("keyup", fnInputEvent);

// Evento click de la `ul` de cada tarea con el #list, marca, borra tareas
const listEvent = $list.addEventListener('click', fnList);

// Evento change, marca/desmarca los checkbox de las tareas
const allCheckedEvent = $allChecked.addEventListener('change', fnAllCheckedEvent);

// Elimina tareas completadas
document.addEventListener('click', (e) => {
    if(e.target.matches('#btn-clear')){

        todoList.deleteCompleted();
        fnDeleteCompleted();
    }
})



// import { Todo } from "./clases/tareas.js";
// import { todoList } from "../index.js";
// // import { tasksHTML } from "./funciones.js";
// // Variables del DOM
// const $input = document.getElementById("header__input"),

//   $none = document.querySelector(".none"),
//   $list = document.getElementById("list"),
//   $btnNone = document.querySelector(".btn-none");

// const $allCheck = document.getElementById("toggle-check");

// // $ hace referencia a los id del DOM
// // const $list = document.getElementById("list");

// // Función que muestra en el HTML la tarea insertada
// export const tasksHTML = (task) => {

//   const todoHTML = `
//     <li class="${ (task.completed) ? "completed" : ""}" data-id="${task.id}">
//         <div class="divView">
//             <input type="checkbox" class="toggle-check-list" ${
//               (task.completed) ? "checked" : ""
//             } >
//             <label>${task.task}</label>
//             <button class="btn-x"></button>
//         </div>
//     </li>
//   `;

//   const $div = document.createElement("div");
//   $div.innerHTML = todoHTML;
//   $list.appendChild($div.firstElementChild);

//   return $div.firstElementChild;
// };

// /* EVENTOS */

// // Evento para el input de las tareas
// export const inputEvent = $input.addEventListener("keyup", (e) => {
//   // console.log(e);

//   const $allCheck = document.getElementById("toggle-check");

//   if (
//     (e.keyCode === 13 && $input.value.length > 0) ||
//     (e.key === "Enter" && $input.value.length > 0)
//   ) {
//     if ($allCheck) $allCheck.checked = false;
//     // console.log($input.value);

//     const eNewTask = new Todo($input.value);
//     todoList.newTask(eNewTask);

//     // console.log(todoList)

//     // Método que muestra la tarea insertada en el HTML la tarea insertada
//     tasksHTML(eNewTask);
//     $none.classList.remove("none");
//     $input.value = "";
//   }
// });

// // Evento click de la `ul` con el #list
// $list.addEventListener("click", (e) => {
//   const targetlocalName = e.target.localName;
//   const fatherElement = e.target.parentElement.parentElement;
//   const taskId = fatherElement.getAttribute("data-id");

//   if (targetlocalName.includes("input")) {
//     todoList.checkCompleted(taskId);
//     fatherElement.classList.toggle("completed");
//   }
//   // console.log(todoList);
//   const clasesCompleted = document.querySelectorAll(".completed");

//   if (clasesCompleted.length > 0) {
//     $btnNone.classList.remove("btn-none");
//   } else {
//     $btnNone.classList.add("btn-none");
//   }
// });

// // evento change para el checkbox que seleciona todos
// $allCheck.addEventListener("change", function (e) {
//   const allCheckboxes = document.querySelectorAll("input[type='checkbox']");

//   console.log(this);

//   // marcando o desmarcando los checkbox
//   if (this.checked) {
//     for (let i = 0; i < allCheckboxes.length; i++) {
//       allCheckboxes[i].checked = true;
//     }
//   } else {
//     for (let i = 0; i < allCheckboxes.length; i++) {
//       allCheckboxes[i].checked = false;
//     }
//   }

//   let composed = e.composedPath();

//   // HTML collection que tiene las `li` de las tareas
//   const $lis = composed[1].children[2].children;
//   console.log($lis);

//   const $inputsCheck = document.querySelectorAll(".toggle-check-list");

//   for (let i = 0; i < $inputsCheck.length; i++) {
//     if (!$inputsCheck[i].checked) {
//       // $inputsCheck[i].checked = true;
//       $lis[i].classList.remove("completed");
//       $btnNone.classList.add("btn-none");
//     } else {
//       // $inputsCheck[i].checked = false;
//       $lis[i].classList.add("completed");
//       $btnNone.classList.remove("btn-none");
//     }
//   }
// });
