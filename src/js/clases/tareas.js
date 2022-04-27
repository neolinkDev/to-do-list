
// se encarga de las tareas que se insertan en el input
export class Todo {
    
  constructor(task) {

    this.task = task;
    this.id = Math.random().toString(10).slice(2) * 1;

    // para saber si la tarea está completada o no
    this.completed = false;

    // para saber la fecha de creación
    this.created = new Date();

  }
}
