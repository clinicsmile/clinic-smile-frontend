import { useState, useEffect } from "react";
import { Button } from "flowbite-react";

import Swal from "sweetalert2";
import ModalComponent from "../../components/modal/Modal";
import AppButton from "../ui/button/AppButton";
import { AppForm } from "../../components/form/AppForm";
import {
  createFormAdmin,
  createFormDoctor,
  createFormPacientAuth,
  createNoAuthForm,
} from "../../data/form/appointments";
import { update } from "../../services/appointments";

const EditAppointment = ({ appointment, onComplete }) => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentForm, setCurrentForm] = useState(null);

  useEffect(() => {
    let person = JSON.parse(localStorage.getItem("user"))?.Person;
    let forms = {
      0: createNoAuthForm,
      1: createFormAdmin,
      3: createFormPacientAuth,
    };
    setCurrentForm(forms[person.rolId || 0]);
  }, []);

  const handleEdit = async (formData) => {
    setLoading(true);

    try {
      let { message } = await update(formData, appointment.id);
      Swal.fire({
        title: message,
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });
      setShowModal(!showModal);
      onComplete && onComplete()
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
       <Button size="xs" pill color="warning" className="mx-2" onClick={() => setShowModal(!showModal)}>
          Editar
       </Button>
      <ModalComponent
        show={showModal}
        onClose={() => setShowModal(!showModal)}
        header={`Editar cita`}
        body={
          <AppForm
            form={currentForm}
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
