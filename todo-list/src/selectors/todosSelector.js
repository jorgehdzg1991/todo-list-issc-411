import Todo from '../representations/Todo';

export default function todosSelector(state) {
    return state.todos.map(todo => Todo.fromState(todo));
}