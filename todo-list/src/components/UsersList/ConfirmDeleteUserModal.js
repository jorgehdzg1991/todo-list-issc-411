import { Button, Modal } from 'react-bootstrap';

export default function ConfirmDeleteUserModal(props) {
    const { show, onConfirm, onCancel } = props;
    return (
        <Modal show={show} onHide={onCancel}>
            <Modal.Header closeButton>
                <h4>Attention!</h4>
            </Modal.Header>
            <Modal.Body>
                Are you sure you want to delete this user?
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={onConfirm}>Yes</Button>
                <Button variant="light" onClick={onCancel}>No</Button>
            </Modal.Footer>
        </Modal>
    );
}
