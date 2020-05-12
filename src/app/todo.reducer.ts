import { Action, createReducer, on } from '@ngrx/store';
import { Todo } from './todo';
import * as TodoActions from './todos.actions'

export const todoFeatureKey = 'todo';

export interface TodoState{
  todos: Todo[]
}

export const initialState: TodoState= {
  todos: []
};


export const reducer = createReducer(
  initialState,
  on(TodoActions.addTodoSuccess, ( state, { todo }) => ({ ...state, todos: state.todos.concat(todo) })),
  on(TodoActions.loadTodosSuccess, ( state, { todos }): TodoState =>({ ...state, todos: todos })),
  on(TodoActions.deleteTodoSuccess, ( state, { id })=>({...state, todos: state.todos.filter(i=>i.id!==id)}))
)
