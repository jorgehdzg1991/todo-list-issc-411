export const USER_ADDED = 'USER_ADDED';

export default function addUserAction(user) {
  return {
    type: USER_ADDED,
    payload: user
  };
}
