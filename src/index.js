// IMPORTANDO CSS
import normalize from './css/normalize.css';
import styles    from './index.css';

// IMPORTANDO CLASES
import { Todo } from './js/clases/tareas';
import { TodoList } from './js/clases/tareas-lista';

// IMPORTANDO FUNCIONES
import { $none, showTaskHTML } from './js/funciones';

// IMPORTANDO EVENTOS
import { inputEvent } from './js/eventos';

// INSTANCIAS CLASES 
export const todoList = new TodoList();

// iterando para mostrar las tareas en el HTML
todoList.todos.forEach( todo =>  {
    showTaskHTML(todo);
    $none.classList.remove("none");
});

console.log('todo', todoList.todos)



// const task = new Todo('Aprendiendo a programar un Todo-List');

// todoList.newTask( task );
// console.log( todoList );

// showTaskHTML( task );





