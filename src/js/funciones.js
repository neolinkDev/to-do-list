import { Todo } from "./clases/tareas";
import { todoList } from "..";

// VARIABLES
let flag = false;
let pendient;

// VARIABLES DEL DOM
const $list   = document.getElementById("list"),
  $input      = document.getElementById("header__input"),
  $allChecked = document.getElementById('all-checked'),
  $option     = document.querySelectorAll('#option');

export const $none = document.querySelector(".none"),
  $btnNone         = document.querySelector(".btn-none"),
  $pendings        = document.querySelector('.span strong');

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

  // pendingTasks();
  todoList.pendingTasks( $pendings );

  return $div.firstElementChild;
};

// Función evento keyup, inputEvent
export const fnInputEvent = (e) => {
  if (
    (e.keyCode === 13 && $input.value.length > 0) ||
    (e.key === "Enter" && $input.value.length > 0)
  ) {

    // if ($allChecked) $allChecked.checked = false;
    // console.log($input.value)
    const newTask = new Todo($input.value);

    // inserta la tarea en el []
    todoList.newTask(newTask);
    // console.log(todoList);

    
    // muestra en el html la tarea
    showTaskHTML(newTask);
    
    // Evita mostrar tarea desmarcada al agregar una nueva tarea estando en la opción completados
    if( flag ){
      // console.log(newTask)
      for(let elem of $list.children){
        // console.log(elem);

        const isCompleted = elem.classList.contains('completed');

        if( !isCompleted ) elem.classList.add('btn-none');

      }
    }

    $none.classList.remove("none");
    $input.value = "";
  }
};

// Función evento click, listEvent
export const fnList = (e) => {
  const targetlocalName = e.target.localName,
    fatherElement = e.target.parentElement.parentElement,
    taskId = fatherElement.getAttribute("data-id");

  if (targetlocalName.includes("input")) {
    todoList.checkCompleted(taskId);
    todoList.pendingTasks($pendings);
    fatherElement.classList.toggle("completed");

    showHide();

  } else if (targetlocalName.includes("button")) {
    todoList.deleteTask(taskId);
    todoList.pendingTasks($pendings);
    $list.removeChild(fatherElement);
  }

  console.log(todoList); // todoList.todos
  
  // oculta las opciones
  if(todoList.todos.length === 0){
    $none.classList.add("none");
    // $allChecked.checked = false;
  }
};

// muestra u oculta las tareas dependiendo en que opción se encuentre
function showHide(){
  if(flag && pendient === 'completado'){

    for(let elem of $list.children){
  
      const isCompleted = elem.classList.contains('completed');

      if( !isCompleted ) elem.classList.add('btn-none');
      
    }
    return;
  }

  if(!flag && pendient === 'pendiente'){

    for(let elem of $list.children){
  
      const isCompleted = elem.classList.contains('completed');

      if( isCompleted ) elem.classList.add('btn-none');
      
    }
    return;
  }   
}

// Función evento change, allCheckedEvent
// export function fnAllCheckedEvent(e){
//   const allCheckboxes = document.querySelectorAll("input[type='checkbox']");

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
  
// };

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

/* fn para el evento click para la manipulación de las opciones de las tareas */
export const fnOptions = (e) => {
  
  // saber el texto al que le damos click en la opciones
  const filter = e.target.text;
  
  // console.log($option)

  // colocando "cuadro" a la opcion que demos click con la clase `selected`
  // removemos la clase selected
  $option.forEach( elem => elem.classList.remove('selected'));

  // console.log(e.target);

  e.target.classList.add('selected');

  // iteramos sobre las tareas
  for(let elem of $list.children){
    // console.log(elem);

    elem.classList.remove('btn-none');

    const isCompleted = elem.classList.contains('completed');

    switch ( filter ) {
      case 'Pendientes':
        if( isCompleted ) elem.classList.add('btn-none');
        flag = false;
        pendient = 'pendiente';
      break;
      
      case 'Completados':
        if( !isCompleted ) elem.classList.add('btn-none');
        flag = true;
        pendient = 'completado';
      break;

      default:
        flag = false;
        pendient = 'todo';
        break;
    }
  }
}
