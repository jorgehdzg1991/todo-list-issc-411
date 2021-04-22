import { USER_ADDED } from '../components/AddUserForm/actions/addUserAction';
import { USER_DELETED } from '../components/UsersList/actions/userDeletedAction';
import { USERS_LOADED } from '../StartupRunner';

const initialState = [];

export default function usersReducer(usersState = initialState, action) {
  switch (action.type) {
    case USER_ADDED:
      return [
        ...usersState,
        action.payload
      ];
    case USERS_LOADED:
      return [
        ...action.payload
      ];
    case USER_DELETED:
      return usersState.reduce((accumulator, user) => {
        if (user.id !== action.payload.id) {
          return [
            ...accumulator,
            user
          ];
        }
        return accumulator;
      }, []);
    default:
      return usersState;
  }
}
