import axios from 'axios';
import ApiConfig from '../ApiConfig';
import Todo from '../representations/Todo';

export default class UpdateTodoCompletedStatus {
    constructor(todo, newCompletedStatus) {
        this.todo = todo;
        this.newCompletedStatus = newCompletedStatus;
    }

    getRequestUrl() {
        const todoId = this.todo.id;
        return ApiConfig.endpoints.todos.updateCompletedStatus(todoId);
    }

    async send() {
        const requestUrl = this.getRequestUrl();
        const response = await axios.put(requestUrl, {
            status: this.newCompletedStatus
        });
        return Todo.fromApiResponse(response.data);
    }
}
