import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-todo',
  imports: [FormsModule],
  templateUrl: './todo.html',
  styleUrl: './todo.css'
})
export class Todo {
  todos = [
    {id : 1, task : "Présenter les composants Angular", state:"done"},
    {id : 2, task : "Présenter les mécanisme de binding", state:"pending"},
    {id : 3, task : "Introduction aux directives", state:"pending"}
  ]
  tache = '';
  tachem=''
  tachea=''
  ajouterTache = () =>{
    let nouveauTache = {
      id : this.todos.length+1,
      task : this.tache,
      state : "pending"
      }
      this.todos.push(nouveauTache)
  }
  supprimerTache = (id : number)=>{
    this.todos = this.todos.filter((todo) => todo.id != id)
    
  }
  
  modifTodo=(id : number)=> {
   const task = this.todos.find((todo)=>todo.id==id);
   if (task){
    this.tachem=task.task;
    this.tachea=task.task;
   }
   
   }
   modifTodo1=()=>{
    const task = this.todos.find((todo)=>todo.task== this.tachea);
    if (task) {
      this.todos.map((todo)=>{
        if (task.id== todo.id) {
          todo.task=this.tachem;
          
        }
      })
      
    }
   }
} 
