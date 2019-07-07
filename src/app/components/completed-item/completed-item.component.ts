import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../classes/todo';
import { Completedtodo } from '../../classes/todo';
import { TodoService } from '../../services/todo.service';
@Component({
  selector: 'app-completed-item',
  templateUrl: './completed-item.component.html',
  styleUrls: ['./completed-item.component.css']
})
export class CompletedItemComponent implements OnInit {
  public disabled: boolean;
  public shouldShow:boolean = false;
  @Input()
  public todo: Todo;
  @Input()
  public completedtodo: Completedtodo;
  public Completedtodotext: string;
  constructor(public todoService: TodoService) {
    this.Completedtodotext = '';
    this.disabled = true;
  }

  ngOnInit() {
  }

  //calling services
  public removeTodo1(): void {
    this.todoService.removeTodo1(this.todo.id, this.todo.text);
  }
  public incomplete(): void {
    this.todoService.incomplete(this.completedtodo.id, this.completedtodo.text);
  }
  public deletetodo(): void {
    this.todoService.deletetodo(this.completedtodo.id);
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
