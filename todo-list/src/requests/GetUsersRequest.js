import axios from 'axios';
import ApiConfig from '../ApiConfig';
import User from '../representations/User';

export default class GetUsersRequest {
    async send() {
        const response = await axios.get(ApiConfig.endpoints.users.get);
        const usersListResponse = response.data || [];
        return usersListResponse.map(user => User.fromApiResponse(user));
    }
}
