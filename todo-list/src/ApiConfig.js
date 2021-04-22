export default class ApiConfig {
    static baseUrl = 'http://localhost:45678';

    static get endpoints() {
        const todosBasePath = `${ApiConfig.baseUrl}/api/todos`;
        const usersBasePath = `${ApiConfig.baseUrl}/api/users`;
        return {
            todos: {
                basePath: todosBasePath,
                add: todosBasePath,
                get: todosBasePath,
                updateCompletedStatus: id => `${todosBasePath}/${id}`,
                delete: id => `${todosBasePath}/${id}`
            },
            users: {
                basePath: usersBasePath,
                get: usersBasePath,
                add: usersBasePath,
                delete: id => `${usersBasePath}/${id}`
            }
        };
    }
}
