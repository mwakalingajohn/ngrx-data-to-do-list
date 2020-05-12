import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from "@angular/forms";

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.scss']
})
export class NewTodoComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder
  ) { }

  todoForm: FormGroup = this.formBuilder.group({
    title: new FormControl('')
  })

  ngOnInit(): void {

  }

  onTodoFormSubmit(){
    this.todoForm.reset()
  }
}
