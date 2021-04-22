export const TODO_ADDED = 'TODO_ADDED';

export default function addTodoAction(todo) {
  return {
    type: TODO_ADDED,
    payload: todo
  };
}
