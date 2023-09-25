import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import ModalComponent from "../../components/modal/Modal";
import { AppForm } from "../../components/form/AppForm";
import { createForm } from "../../data/form/appointments";
import { create, update } from "../../services/appointments";

export default function CreateAppointment({ onActive }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let person = JSON.parse(localStorage.getItem("user")).Person;
    console.log(person);
    setCurrentUser(person);
  }, []);

  const handleCreate = async (formData) => {
    setLoading(true);

    try {
      let { message } = await services.register(formData);
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
      <ModalComponent
        show={showModal}
        onClose={() => setShowModal(!showModal)}
        header={`Crear cita - ${currentUser.name}`}
        body={
          <AppForm
            form={createForm}
            onSubmit={(e) => handleCreate(e)}
            loading={loading}
            loadedData={currentUser}
          />
        }
        footer={""}
      />
    </>
  );
}
