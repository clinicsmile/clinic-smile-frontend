import { Modal } from "flowbite-react";
const ModalComponent = ({ show, onClose, header, body, footer }) => {
  return (
    <Modal show={show} onClose={onClose} size="md" popup>
      <Modal.Header>{header}</Modal.Header>

      <Modal.Body>{body}</Modal.Body>

      <Modal.Footer>{footer}</Modal.Footer>
    </Modal>
  );
};

export default ModalComponent;
