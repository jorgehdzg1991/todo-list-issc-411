import { Container, Jumbotron, Row, Col } from 'react-bootstrap';
import AddUserForm from '../components/AddUserForm';
import UsersList from '../components/UsersList';

export default function UsersPage() {
  return (
    <div>
      <Jumbotron className="text-center">
        <h1>Welcome to the Users Page!</h1>
        <p>
          On this page you can add and remove users.
        </p>
      </Jumbotron>
      <Container>
        <Row>
          <Col>
            <AddUserForm />
          </Col>
          <Col>
            <UsersList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
