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
  editFormAdmin,
} from "../../data/form/appointments";
import { update } from "../../services/appointments";

const EditAppointment = ({ appointment, onComplete }) => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentForm, setCurrentForm] = useState(null);

  useEffect(() => {
    let person = JSON.parse(localStorage.getItem("user"))?.Person;
    const getForms = async () => {
      const noAuth = await createNoAuthForm();
      const formAdmin = await editFormAdmin();
      const formPatient = await createFormPacientAuth();
      const forms = {
        0: noAuth,
        1: formAdmin,
        3: formPatient,
      };
      setCurrentForm(forms[person.rolId || 0]);
    };
    getForms();
  }, []);

  const handleEdit = async (formData) => {
    console.log(formData);
    //validar time para que sea de 7 a 5
    const hora = formData.time.split(":");
    if (parseInt(hora[0]) < 7 || parseInt(hora[0]) > 16) {
      Swal.fire({
        title: "La hora no es valida",
        text: "Horario de atencion de 7:00 A.M. a 05:00 P.M.",
        position: "center",
        icon: "error",
        showConfirmButton: true,
      });
      return;
    }

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
      onComplete && onComplete();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="col-span-1 mx-auto py-1">
      <Button
        size="xs"
        pill
        color="warning"
        onClick={() => setShowModal(!showModal)}
      >
        Editar
      </Button>
      <ModalComponent
        show={showModal}
        onClose={() => setShowModal(!showModal)}
        header={`Editar cita`}
        body={
          currentForm ? (
            <AppForm
              form={currentForm}
              onSubmit={(e) => handleEdit(e)}
              loading={loading}
              loadedData={appointment}
            />
          ) : (
            "Cargando Formulario..."
          )
        }
        footer={""}
      />
    </div>
  );
};

export default EditAppointment;
