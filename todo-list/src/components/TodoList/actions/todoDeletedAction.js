export default function todoDeletedAction(todo) {
    return {
        type: TODO_DELETED,
        payload: todo
    };
}

export const TODO_DELETED = 'TODO_DELETED';
