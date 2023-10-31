import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import ModalComponent from "../../components/modal/Modal";
import AppButton from "../ui/button/AppButton";
import { AppForm } from "../../components/form/AppForm";
import {
  createFormAdmin,
  createFormPacientAuth,
  createNoAuthForm,
} from "../../data/form/appointments";
import { create } from "../../services/appointments";

const CreateAppointment = ({ onComplete }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentForm, setCurrentForm] = useState(null);

  useEffect(() => {
    let person = JSON.parse(localStorage.getItem("user"))?.Person;
    setCurrentUser(person);
    const getForms = async () => {
      const noAuth = await createNoAuthForm();
      const formAdmin = await createFormAdmin();
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

  const handleCreate = async (formData) => {
    formData.status = currentUser?.rolId !== 1 ? "Pendiente" : "En proceso";
    if (currentUser?.rolId == 3) {
      formData.PersonDocument = currentUser.document;
    }
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
      onComplete && onComplete();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return currentUser?.rolId != 2 ? (
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
          currentForm && (
            <AppForm
              form={currentForm}
              onSubmit={(e) => handleCreate(e)}
              loading={loading}
              loadedData={currentUser || undefined}
            />
          )
        }
        footer={""}
      />
    </>
  ) : (
    <></>
  );
};

export default CreateAppointment;