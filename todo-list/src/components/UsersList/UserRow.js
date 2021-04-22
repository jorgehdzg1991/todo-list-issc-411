import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export default function UserRow(props) {
    const { user, onIntentionToDeleteUser } = props;

    return (
        <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>
                <Button
                    variant="danger"
                    size="sm"
                    onClick={() => onIntentionToDeleteUser(user)}
                >
                    <FontAwesomeIcon icon={faTrash} />
                </Button>
            </td>
        </tr>
    );
}