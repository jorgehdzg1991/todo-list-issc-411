import User from '../representations/User';

export default function usersSelector(state) {
    return state.users.map(u => User.fromState(u));
}
