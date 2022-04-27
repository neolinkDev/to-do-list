import { inputEvent } from "./eventos.js";

// Variables del DOM
// $ hace referencia a los id del DOM
const $list = document.getElementById('list');

// Mostrando en el HTML la tarea insertada
export const tasksHTML = ( task ) => {
    
    
    const $div = document.createElement('div');

    const taskHTML = `
    <li class="${ (task.completed) ? 'completed' : '' }" data-id="${ task.id }" >
        <div class="divView">
            <input type="checkbox" class="toggle-check-list" ${ ( task.completed ) ? 'checked' : '' } >
            <label>${ task.task }</label>
            <button class="btn-x"></button>
        </div>
    </li>
    `;

    $div.innerHTML = taskHTML;
    $list.appendChild($div.firstElementChild);

    return $div.firstElementChild;
}
