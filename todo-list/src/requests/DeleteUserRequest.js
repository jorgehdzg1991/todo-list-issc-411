import axios from 'axios';
import ApiConfig from '../ApiConfig';

export default class DeleteUserRequest {
    constructor(userId) {
        this.userId = userId;
    }

    send() {
        return axios.delete(ApiConfig.endpoints.users.delete(this.userId));
    }
}