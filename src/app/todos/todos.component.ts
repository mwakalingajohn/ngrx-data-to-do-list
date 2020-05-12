import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../todo';
import { Store } from '@ngrx/store';
import * as TodosActions from '../todos.actions'
import * as fromTodos from '../todos.selectors'
import { State } from '../reducers';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos$: Observable<Todo[]>

  constructor(
    private store: Store<State>
  ) {

  }

  ngOnInit(): void {
    this.store.dispatch(TodosActions.loadTodos())
    this.todos$ = this.store.select(fromTodos.getTodos)
  }

  onDeleteClickHandler(id:string):void{
    this.store.dispatch(TodosActions.deleteTodo({id}))
  }

  fetchTodos():void{

  }
}
