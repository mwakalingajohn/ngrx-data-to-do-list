import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {


  todos$: Observable<Todo[]>

  constructor(
    private todoService: TodoService
  ) {
    this.fetchTodos()
    this.todos$ = todoService.entities$
  }

  ngOnInit(): void {
  }

  onDeleteClickHandler(id:string):void{
    this.todoService.delete(id)
  }

  fetchTodos():void{
    this.todoService.getAll()
  }
}
