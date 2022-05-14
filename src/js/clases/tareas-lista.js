
// Clase manejar/manipular la lista de tareas
export class TodoList {

  constructor() {
    this.todos = [];
  }

  /* MÉTODOS */
  // Guardamos la tarea en el array
  newTask( task ) {
    this.todos.push( task );
  }

  // borrando la tarea
  deleteTask( id ) {
    this.todos = this.todos.filter( todo => todo.id != id);
  }

  // marca la tarea completada sabiendo su id
  checkCompleted( id ){
    
    for (let todo of this.todos) {
      // console.log(todo)
      // console.log(id, todo.id)

      if( todo.id == id ){
        todo.completed = !todo.completed;
        break;
      }
    }
  }

  // Elimina tareas completadas o marcadas
  deleteCompleted(){
    this.todos = this.todos.filter( todo => !todo.completed);
  }
}
