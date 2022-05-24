import { $btnNone } from "../funciones";

// Clase manejar/manipular la lista de tareas
export class TodoList {

  constructor() {
    // this.todos = [];
    this.loadLS();
  }

  /* MÉTODOS */
  // Guardamos la tarea en el array
  newTask( task ) {
    this.todos.push( task );
    this.saveLS();
  }

  // borrando la tarea
  deleteTask( id ) {
    this.todos = this.todos.filter( todo => todo.id != id);
    this.saveLS();
  }

  // marca la tarea completada sabiendo su id
  checkCompleted( id ){
    
    for (let todo of this.todos) {
      // console.log(todo)
      // console.log(id, todo.id)

      if( todo.id == id ){
        todo.completed = !todo.completed;
        this.saveLS();
        break;
      }
    }
  }

  // Elimina tareas completadas o marcadas
  deleteCompleted(){
    this.todos = this.todos.filter( todo => !todo.completed);
    this.saveLS();
  }

  // Guardando en localStorage
  saveLS(){

    localStorage.setItem('todo', JSON.stringify(this.todos)); 

  }

  // Cargando localStorage
  loadLS(){

    if(localStorage.getItem('todo')){
      
      this.todos = JSON.parse(localStorage.getItem('todo'));

      // console.log('cargando localStorage', this.todos )

    }else {

      this.todos = [];

    }

  }

  // Calcula las tareas pendientes
  pendingTasks(pendings){
    
    // arreglo de las tareas
    const todosArray = this.todos.filter( todo => todo.completed === true).length;

    // console.log(todosArray)
    
    // # de tareas
    pendings.textContent = this.todos.length - todosArray;

    if( todosArray !== 0){
      $btnNone.classList.remove("btn-none");
      return;
    }

    $btnNone.classList.add("btn-none");
    
    

  }

}
