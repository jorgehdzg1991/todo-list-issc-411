import axios from 'axios';
import ApiConfig from '../ApiConfig';
import Todo from '../representations/Todo';

export default class GetTodosRequest {
    async send() {
        const response = await axios.get(ApiConfig.endpoints.todos.get);
        const todosListResponse = response.data || [];
        return todosListResponse.map(todo => Todo.fromApiResponse(todo));
    }
}
