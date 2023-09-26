import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import ModalComponent from "../../components/modal/Modal";
import AppButton from "../ui/button/AppButton";
import { AppForm } from "../../components/form/AppForm";
import { createForm } from "../../data/form/appointments";
import { update } from "../../services/appointments";

const EditAppointment = ({ appointment }) => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {}, []);

  const handleEdit = async (formData) => {
    setLoading(true);

    try {
      let { message } = await update(formData);
      Swal.fire({
        title: message,
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });
      setShowModal(!showModal);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <AppButton
        title="Editar"
        type="primaryClass"
        submit={true}
        action={() => setShowModal(!showModal)}
      />
      <ModalComponent
        show={showModal}
        onClose={() => setShowModal(!showModal)}
        header={`Editar cita`}
        body={
          <AppForm
            form={createForm}
            onSubmit={(e) => handleEdit(e)}
            loading={loading}
            loadedData={appointment}
          />
        }
        footer={""}
      />
    </>
  );
};

export default EditAppointment;
