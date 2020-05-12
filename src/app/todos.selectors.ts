import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './reducers';

export const appState = ( state: State )=>state

export const getTodos = createSelector(
  appState,
   (appState: State) => appState.todoState.todos
)
