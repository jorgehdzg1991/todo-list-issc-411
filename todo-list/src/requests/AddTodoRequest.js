import axios from 'axios';
import ApiConfig from '../ApiConfig';
import Todo from '../representations/Todo';

export default class AddTodoRequest {
    constructor(todoText, assignedUserId) {
        this.todoText = todoText;
        this.assignedUserId = assignedUserId;
    }

    async send() {
        const response = await axios.post(ApiConfig.endpoints.todos.add, {
            todoText: this.todoText,
            assignedUserId: this.assignedUserId
        });
        return Todo.fromApiResponse(response.data);
    }
}
