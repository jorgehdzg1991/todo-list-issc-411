import GetUsersRequest from './requests/GetUsersRequest';
import GetTodosRequest from './requests/GetTodosRequest';

export default class StartupRunner {
    constructor(dispatch) {
        this.dispatch = dispatch;
    }

    async run() {
        await this.loadUsers();
        await this.loadTodos();
    }

    async loadUsers() {
        const users = await new GetUsersRequest().send();
        this.dispatch({
            type: USERS_LOADED,
            payload: users
        });
    }

    async loadTodos() {
        const todos = await new GetTodosRequest().send();
        this.dispatch({
            type: TODOS_LOADED,
            payload: todos
        });
    }
}

export const USERS_LOADED = 'USERS_LOADED';
export const TODOS_LOADED = 'TODOS_LOADED';
