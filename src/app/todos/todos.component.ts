import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {


  todos$: Observable<Todo[]>

  constructor() { }

  ngOnInit(): void {
  }

  onDeleteClickHandler(id:string):void{

  }

  fetchTodos():void{

  }
}
