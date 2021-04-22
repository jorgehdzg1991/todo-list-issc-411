import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table } from 'react-bootstrap';
import usersSelector from '../../selectors/usersSelector';
import userDeletedAction from './actions/userDeletedAction';
import DeleteUserRequest from '../../requests/DeleteUserRequest';
import ConfirmDeleteUserModal from './ConfirmDeleteUserModal';
import UserRow from './UserRow';

export default function UsersList() {
    const users = useSelector(usersSelector);
    const dispatch = useDispatch();
    const [showDeleteConfirmationModal, setShowDeleteConfirmationModal] = React.useState(false);
    const [userToDelete, setUserToDelete] = React.useState(null);
    
    async function handleUserDeletion() {
        await new DeleteUserRequest(userToDelete.id).send();
        const action = userDeletedAction(userToDelete);
        dispatch(action);
    }

    function confirmUserDeletion(user) {
        setUserToDelete(user);
        setShowDeleteConfirmationModal(true);
    }

    async function onUserDeletionConfirmed() {
        await handleUserDeletion();
        setUserToDelete(null);
        setShowDeleteConfirmationModal(false);
    }

    function onUserDeletionCanceled() {
        setUserToDelete(null);
        setShowDeleteConfirmationModal(false);
    }

    const usersRows = users.map(user => (
        <UserRow
            key={user.id}
            user={user}
            onIntentionToDeleteUser={confirmUserDeletion}
        />
    ));

    return (
        <div>
            <ConfirmDeleteUserModal
                show={showDeleteConfirmationModal}
                onConfirm={onUserDeletionConfirmed}
                onCancel={onUserDeletionCanceled}
            />
            <Table bordered hover size="sm">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {usersRows}
                </tbody>
            </Table>
        </div>
    );
}
