import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import ModalComponent from "../../components/modal/Modal";
import AppButton from "../ui/button/AppButton";
import { AppForm } from "../../components/form/AppForm";
import { createForm } from "../../data/form/appointments";
import { create } from "../../services/appointments";

const CreateAppointment = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let person = JSON.parse(localStorage.getItem("user"))?.Person;
    setCurrentUser(person);
  }, []);

  const handleCreate = async (formData) => {
    setLoading(true);

    try {
      let { message } = await create(formData);
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
        title="Crear cita"
        type="primaryClass"
        submit={true}
        action={() => setShowModal(!showModal)}
      />
      <ModalComponent
        show={showModal}
        onClose={() => setShowModal(!showModal)}
        header={`Crear cita - ${currentUser?.name}`}
        body={
          <AppForm
            form={createForm}
            onSubmit={(e) => handleCreate(e)}
            loading={loading}
          />
        }
        footer={""}
      />
    </>
  );
};

export default CreateAppointment;
