import { Modal } from "flowbite-react";
const ModalComponent = ({ show, onClose, header, body, footer, size="md"}) => {
  return (
    <Modal show={show} onClose={onClose} size={size} popup>
      <Modal.Header className="ml-10">{header}</Modal.Header>

      <Modal.Body>{body}</Modal.Body>

      <Modal.Footer>{footer}</Modal.Footer>
    </Modal>
  );
};

export default ModalComponent;
