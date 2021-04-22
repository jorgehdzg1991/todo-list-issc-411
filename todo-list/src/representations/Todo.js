export default class Todo {
  constructor(id, text, assignedUserId, completed = false) {
    this.id = id;
    this.text = text;
    this.assignedUserId = assignedUserId;
    this.completed = completed;
  }

  static fromState(todo) {
    return new Todo(todo.id, todo.text, todo.assignedUserId, todo.completed);
  }

  static fromApiResponse(response) {
    return new Todo(response.id, response.text, response.assignedUserId, response.completed);
  }
}
