export default function todoCompletedStatusUpdatedAction(todo) {
    return {
        type: TODO_COMPLETED_STATUS_UPDATED,
        payload: todo
    };
}

export const TODO_COMPLETED_STATUS_UPDATED = 'TODO_COMPLETED_STATUS_UPDATED';
