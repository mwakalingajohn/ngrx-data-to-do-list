import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromTodo from '../todo.reducer';

export const stateFeatureKey = 'state';

export interface State {
  todoState: fromTodo.TodoState
}

export const reducers: ActionReducerMap<State> = {
  todoState: fromTodo.reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
