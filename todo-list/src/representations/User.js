export default class User {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    static fromApiResponse(response) {
        return new User(response.id, response.name);
    }

    static fromState(user) {
        return new User(user.id, user.name);
    }
}