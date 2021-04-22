import { Container, Jumbotron, Row, Col } from 'react-bootstrap';
import AddTodoForm from '../components/AddTodoForm';
import TodoList from '../components/TodoList';

export default function TodosPage() {
  return (
    <div>
      <Jumbotron className="text-center">
        <h1>Welcome to the To Do's Page!</h1>
        <p>
          On this page you can add, remove and complete "To Do" items.
        </p>
      </Jumbotron>
      <Container>
        <Row>
          <Col>
            <AddTodoForm />
          </Col>
          <Col>
            <TodoList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
