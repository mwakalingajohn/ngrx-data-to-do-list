import * as fromTodos from './todos.actions';

describe('loadTodoss', () => {
  it('should return an action', () => {
    expect(fromTodos.loadTodoss().type).toBe('[Todos] Load Todoss');
  });
});
