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
    private todosService: TodoService
  ) { }

  ngOnInit(): void {
    this.fetchTodos()
  }

  onDeleteClickHandler(id:string):void{
    this.todosService.deleteTodo(id)
      .subscribe(r=>{ 
        this.fetchTodos()
      })
  }

  fetchTodos():void{
    this.todos$ = this.todosService.getTodos()
  }

  onRefreshClickHandler(){
    this.fetchTodos()
  }
}
