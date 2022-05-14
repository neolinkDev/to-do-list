// IMPORTANDO CSS
import normalize from './css/normalize.css';
import styles    from './index.css';

// IMPORTANDO CLASES
import { Todo } from './js/clases/tareas';
import { TodoList } from './js/clases/tareas-lista';

// IMPORTANDO FUNCIONES
import { showTaskHTML } from './js/funciones';

// IMPORTANDO EVENTOS
import { inputEvent } from './js/eventos';

// INSTANCIAS CLASES 
export const todoList = new TodoList();

const task = new Todo('Aprendiendo a programar un Todo-List');

todoList.newTask( task );
console.log( todoList );

showTaskHTML( task );

// export const todoList = new TodoList();
// const task     = new Todo('Terminar este proyecto de Todo-list');

// todoList.newTask(task);
 
// console.log(todoList);

// tasksHTML( task );





