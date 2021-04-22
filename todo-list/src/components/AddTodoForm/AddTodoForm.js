import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
import addTodoAction from './actions/addTodoAction';
import SelectUserDropdown from './SelectUserDropdown';
import usersSelector from '../../selectors/usersSelector';
import AddTodoRequest from '../../requests/AddTodoRequest';

export default function AddTodoForm() {
  const [todoText, setTodoText] = React.useState('');
  const [selectedUser, setSelectedUser] = React.useState('');

  const dispatch = useDispatch();

  const users = useSelector(usersSelector);

  function handleTodoTextChange(event) {
    const value = event.target.value;
    setTodoText(value);
  }

  function handleSelectedUserChange(event) {
    const value = event.target.value;
    setSelectedUser(value);
  }

  async function handleFormSubmittion(event) {
    event.preventDefault();
    const assignedUserId = parseInt(selectedUser);
    const todo = await new AddTodoRequest(todoText, assignedUserId).send();
    const action = addTodoAction(todo);
    dispatch(action);
    toast.success('TODO added successfully');
    resetForm();
  }

  function resetForm() {
    setTodoText('');
  }

  return (
    <div>
      <h2>Add a To Do</h2>
      <form onSubmit={handleFormSubmittion}>
        <Form.Group controlId="todoText">
          <Form.Label>What do has to be done?</Form.Label>
          <Form.Control
            type="text"
            value={todoText}
            onChange={handleTodoTextChange}
          />
        </Form.Group>
        <SelectUserDropdown
          users={users}
          selectedUser={selectedUser}
          onUserSelected={handleSelectedUserChange}
        />
        <Button
          type="submit"
          variant="primary"
        >
          Add TODO
        </Button>
      </form>
    </div>
  );
}
