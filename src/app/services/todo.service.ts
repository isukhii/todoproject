import { Injectable } from '@angular/core';
import { Todo } from '../classes/todo';
import { Completedtodo } from '../classes/todo';
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  public todos: Todo[];
  public completedtodos: Completedtodo[];
  public nextId: number;
  public nextId1: number;
  public text1: string;
  constructor() {
    this.todos = []; //list of to-dos
    this.completedtodos = []; //completed to-dos
    this.nextId = 1; 
    this.nextId1 = 1;
   }

  //adding task to the list
   public addTodo(text: string): void {
    console.log(this.todos);
    const todo = new Todo(this.nextId, text);
    this.todos.push(todo);
    this.nextId++;
  }
  public getTodos(): Todo[] {
    return this.todos;
  }

  //removing task from the list
  public removeTodo(id: number, text: string): void {
    this.removeTodo1(id, text);
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  //adding task from to-do list to completed list
  public removeTodo1(id: number, text: string): void {
  console.log(this.completedtodos);
  console.log(text);
  const completedtodo = new Completedtodo(id, text);
  this.completedtodos.push(completedtodo);
  id++;
  }
  public getcompletedTodos(): Completedtodo[] {
    return this.completedtodos;
  }

  //adding task from completed list to to-do list
    public incomplete(id: number, text: string): void {
    console.log(id);
    this.completedtodos = this.completedtodos.filter((completedtodo) => completedtodo.id !== id);
    this.addTodo(text);
  }

  //delete task from to-do & complete list
  public deletetodo(id: number): void {
    this.completedtodos = this.completedtodos.filter((completedtodo) => completedtodo.id !== id);
  }

  public incompletedeletetodo(id: number): void {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
}
