import axios from 'axios';
import ApiConfig from '../ApiConfig';
import User from '../representations/User';

export default class AddUserRequest {
    constructor(name) {
        this.name = name;
    }

    async send() {
        const response = await axios.post(ApiConfig.endpoints.users.add, {
            name: this.name
        });
        return User.fromApiResponse(response.data);
    }
}
