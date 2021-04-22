import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Card, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import usersSelector from '../../selectors/usersSelector';
import UpdateTodoCompletedStatus from '../../requests/UpdateTodoCompletedStatusRequest';
import todoCompletedStatusUpdatedAction from './actions/todoCompletedStatusUpdatedAction';
import todoDeletedAction from './actions/todoDeletedAction';
import DeleteTodoRequest from '../../requests/DeleteTodoRequest';

export default function TodoItem(props) {
  const { todo } = props;
  const users = useSelector(usersSelector);
  const dispatch = useDispatch();

  function getSelectedUserName() {
    const user = users.find(user => user.id === todo.assignedUserId);
    return user.name;
  }

  async function handleCompletedCheckboxChange() {
    const newCompletedStatus = !todo.completed;
    const updatedTodo = await new UpdateTodoCompletedStatus(todo, newCompletedStatus).send();
    const action = todoCompletedStatusUpdatedAction(updatedTodo);
    dispatch(action);
  }

  async function handleDeleteTodo() {
    await new DeleteTodoRequest(todo.id).send();
    const action = todoDeletedAction(todo);
    dispatch(action);
  }

  return (
    <Card className="todo-item">
      <Card.Body>
        <h3>{todo.text}</h3>
        <p>
          Assignee: <b>{getSelectedUserName()}</b>
        </p>
        <Form.Group>
          <Form.Check
            type="checkbox"
            label="Completed"
            checked={todo.completed}
            onChange={handleCompletedCheckboxChange}
          />
        </Form.Group>
        <Button
          variant="danger"
          size="sm"
          onClick={handleDeleteTodo}
        >
          <FontAwesomeIcon icon={faTrash} /> Delete
        </Button>
      </Card.Body>
    </Card>
  );
}