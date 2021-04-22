import { TODO_ADDED } from '../components/AddTodoForm/actions/addTodoAction';
import { TODO_COMPLETED_STATUS_UPDATED } from '../components/TodoList/actions/todoCompletedStatusUpdatedAction';
import { TODO_DELETED } from '../components/TodoList/actions/todoDeletedAction';
import { TODOS_LOADED } from '../StartupRunner';

const initialState = [];

export default function todosReducer(todosState = initialState, action) {
  switch (action.type) {
    case TODO_ADDED:
      return [
        ...todosState,
        action.payload
      ];
    case TODOS_LOADED:
      return [
        ...action.payload
      ];
    case TODO_COMPLETED_STATUS_UPDATED:
      const updatedTodo = action.payload;
      return todosState.map(todo => {
        if (todo.id === updatedTodo.id) {
          return updatedTodo;
        }
        return todo;
      });
    case TODO_DELETED:
      return todosState.reduce((accumulator, todo) => {
        if (todo.id !== action.payload.id) {
          return [
            ...accumulator,
            todo
          ];
        }
        return accumulator;
      }, []);
    default:
      return todosState;
  }
}
