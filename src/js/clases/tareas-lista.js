
// Clase de las lista de tareas insertadas
export class TodoList {

  constructor() {
    this.tasks = [];
  }

  /* MÉTODOS */
  // Guardamos la tarea en el array
  newTask(task) {
    this.tasks.push(task);
  }

  // borrando la tarea
  deleteTask( id ) {
    
  }

  // marca la tarea completada sabiendo su id
  checkCompleted( id ){
    
    for (const task of this.tasks) {

      // console.log(id, task.id)

      if( task.id === id){
        task.completed = !task.completed;
        break;
      }
    }
  }
}
