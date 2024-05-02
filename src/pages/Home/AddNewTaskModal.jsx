import Modal from "../../components/Modal";
import PropTypes from "prop-types";

const AddNewTaskModal = ({ closeModal }) => {
  return (
    <Modal title={"Add new task"} toggleFunction={closeModal}>
      <h1>Form goes here</h1>
    </Modal>
  );
};

AddNewTaskModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default AddNewTaskModal;
