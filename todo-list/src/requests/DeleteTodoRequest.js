import axios from 'axios';
import ApiConfig from '../ApiConfig';

export default class DeleteTodoRequest {
    constructor(todoId) {
        this.todoId = todoId;
    }

    send() {
        return axios.delete(ApiConfig.endpoints.todos.delete(this.todoId));
    }
}