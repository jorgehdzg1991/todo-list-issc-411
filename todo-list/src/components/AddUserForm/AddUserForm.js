import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import addUserAction from './actions/addUserAction';
import AddUserRequest from '../../requests/AddUserRequest';

export default function AddUserForm() {
  const [userName, setUserName] = React.useState('');
  const dispatch = useDispatch();

  function handleUserNameChange(event) {
    setUserName(event.target.value);
  }

  async function handleFormSubmit(event) {
    event.preventDefault();
    const user = await new AddUserRequest(userName).send();
    const action = addUserAction(user);
    dispatch(action);
    toast.success('User added successfully');
    resetForm();
  }

  function resetForm() {
    setUserName('');
  }

  return (
    <div>
      <h2>Add a User</h2>
      <form onSubmit={handleFormSubmit}>
        <Form.Group controlId="userName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={userName}
            onChange={handleUserNameChange}
          />
        </Form.Group>
        <Button
          type="submit"
          variant="primary"
        >
          Add User
      </Button>
      </form>
    </div>
  );
}
