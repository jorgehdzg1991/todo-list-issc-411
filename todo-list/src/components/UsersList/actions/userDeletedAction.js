export default function userDeletedAction(user) {
    return {
        type: USER_DELETED,
        payload: user
    };
}

export const USER_DELETED = 'USER_DELETED';
