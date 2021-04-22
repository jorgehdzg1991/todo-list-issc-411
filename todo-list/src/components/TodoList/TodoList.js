import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';
import todosSelector from '../../selectors/todosSelector';
import './TodoList.css';

export default function TodoList() {
  const todos = useSelector(todosSelector);

  if (todos.length === 0) {
    return (
      <div>You have nothing to do today. Enjoy your free time! :D</div>
    );
  }

  const todoCards = todos.map((todo, index) => (
    <TodoItem todo={todo} key={index} />
  ));

  return (
    <div>
      {todoCards}
    </div>
  );
}
