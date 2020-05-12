import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from "@angular/forms";
import { Store } from '@ngrx/store';
import { State } from '../reducers';
import * as TodosActions from "../todos.actions"

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.scss']
})
export class NewTodoComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private store:Store<State>
  ) { }

  todoForm: FormGroup = this.formBuilder.group({
    title: new FormControl('')
  })

  ngOnInit(): void {

  }

  onTodoFormSubmit(){
    let todo = this.todoForm.value
    todo.completed = false
    this.store.dispatch(TodosActions.addTodo({todo:todo}))
    this.todoForm.reset()
  }
}
