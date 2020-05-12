import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TodoService } from './todo.service';
import * as TodosActions from './todos.actions'
import { mergeMap, map, catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';



@Injectable()
export class TodosEffects {

  constructor(
    private actions$: Actions,
    private todoService: TodoService) {}


    fetchTodos$ = createEffect(() => {
      return this.actions$.pipe(
          ofType(TodosActions.loadTodos),
          mergeMap(() => this.todoService.getTodos()
            .pipe(
              map( todos => TodosActions.loadTodosSuccess({ todos: todos})),
              catchError(() => EMPTY))
            ),
      )
    });

    addTodo$ = createEffect(() => {
      return this.actions$.pipe(
          ofType(TodosActions.addTodo),
          mergeMap((todo)=>{console.log(todo); return this.todoService.addTodo(todo.todo)
            .pipe(
              map( todo=> TodosActions.addTodoSuccess({ todo: todo}))
            )}
          )
      )
    });

    deleteTodo$ = createEffect(()=> {
      return this.actions$.pipe(
        ofType(TodosActions.deleteTodo),
        mergeMap(({id}) => this.todoService.deleteTodo(id)
          .pipe(
            map( id => TodosActions.deleteTodoSuccess({id}))
          )
        )
      )
    })
}
