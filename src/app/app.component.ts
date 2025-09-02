import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


interface Todo{
  id: number;
  text: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule], // Added CommonModule
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Fixed typo
})
export class AppComponent {
  name = ""; 
  todo: Todo[] = [];
  addTodo(taskName: string){
    if(taskName.trim()){
      this.todo.push({
        id: Date.now(),
        text: taskName,
        completed: false
      });
    }
    console.log(new Date())
  } 
  completeTodo(id:number){
    const todo = this.todo.find(t => t.id === id);
    if(todo){
      todo.completed = true;
    }
  }
  removeTodo(id: number){
    this.todo = this.todo.filter(t=>t.id!=id);
  }
  resetTodo(){
    this.todo = new Array<Todo>();
  }

}
