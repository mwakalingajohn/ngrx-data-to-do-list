import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from "@angular/forms";
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.scss']
})
export class NewTodoComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private todoService: TodoService
  ) { }

  todoForm: FormGroup = this.formBuilder.group({
    title: new FormControl('')
  })

  ngOnInit(): void {

  }

  onTodoFormSubmit(){
    let todo = this.todoForm.value
    todo.completed = false
    this.todoService.addTodo(todo).subscribe(r=>console.log(r))
    this.todoForm.reset()
  }
}
