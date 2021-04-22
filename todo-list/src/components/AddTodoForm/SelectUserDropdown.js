import { Form } from 'react-bootstrap';

export default function SelectUserDropdown(props) {
  const { users, selectedUser, onUserSelected } = props;

  const options = users.map((user, index) => (
    <option
      key={user.id}
      value={user.id}
    >
      {user.name}
    </option>
  ));

  return (
    <div>
      <Form.Group controlId="selectUserDropdown">
        <Form.Label>By who?</Form.Label>
        <Form.Control
          as="select"
          value={selectedUser}
          onChange={onUserSelected}
        >
          <option></option>
          {options}
        </Form.Control>
      </Form.Group>
    </div>
  );
}
