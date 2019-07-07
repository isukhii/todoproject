import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../classes/todo';
import { TodoService } from '../../services/todo.service';
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  public disabled: boolean;
  public shouldShow:boolean = false;
  @Input()
  public todo: Todo;
  public todotext: string;
  constructor(public todoService: TodoService) { 
    this.disabled = true;
    this.todotext = '';
  }

  ngOnInit() {
  }
  //calling services
  public removeTodo(): void {
    this.todoService.removeTodo(this.todo.id, this.todo.text);
  }
  public incompletedeletetodo(): void {
    this.todoService.incompletedeletetodo(this.todo.id);
  }

  //enabling disabling the input box
  public editTodo(): void {
    this.disabled = false;
    this.shouldShow = true;
  }
  public disabling(): void {
    this.disabled = true;
    this.shouldShow = false;
  }
}
