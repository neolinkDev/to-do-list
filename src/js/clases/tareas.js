
// Clase con las propiedades de cada tarea creada
export class Todo {
    
  constructor( todoTask ) {

    this.todoTask  = todoTask;

    // id que se le asignará a cada tarea
    this.id        = Math.random().toString(10).slice(2) * 1;
    // this.id = Math.random().toString(10).slice(2);

    // para saber si la tarea está completada o no
    this.completed = false;

    // para saber la fecha de creación
    this.created   = new Date();

  }
}
