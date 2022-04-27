import normalize from './css/normalize.css';
import styles    from './index.css';

// importando clases
import { Todo }      from './js/clases/tareas.js';
import { TodoList }  from './js/clases/tareas-lista.js';
import { tasksHTML } from './js/funciones.js';


// Instancias
export const todoList = new TodoList();
const task     = new Todo('Terminar este proyecto de Todo-list');

// task.completed = true;

todoList.newTask(task);

console.log(todoList);

tasksHTML( task );





