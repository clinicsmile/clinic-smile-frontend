import { Table, Button } from "flowbite-react";
import { services } from "../../services/services";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";
import { Forms } from "../../data/form/Forms";
import { AppForm } from "../../components/form/AppForm";
import ModalComponent from "../modal/Modal";
import { create } from "../../services/appointments";

function ListAppoimentsDoctor() {
  const [appoiments, setAppoiments] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [patient, setPatient] = useState(false);
  const [secondForm, setSecondForm] = useState(false);

  const handleToggleModal = (form) => {
    setPatient(form);
    setShowModal(true);
  };

  useEffect(() => {
    getAppoiments();
  }, []);

  const getAppoiments = async () => {
    try {
      const res = await services.getDoctorAppoiments();
      setAppoiments(res);
    } catch (error) {
      console.log(error);
      await Swal.fire({
        title: "Ocurrio un error al obtener los usuarios",
        icon: "error",
        timer: 1500,
        showConfirmButton: false,
      });
      getAppoiments();
    }
  };
  const registerProcedure = async (formdata) => {
    console.log(formdata);
    try {
      await services.registerProcedure(formdata);
      Swal.fire({
        title: "Procedimiento registrado correctamente",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });
    } catch (error) {
      Swal.fire({
        title: "Ocurrio un error al registrar el procedimiento",
        icon: "error",
        timer: 1500,
        showConfirmButton: false,
      });
    }
    getAppoiments();
    if (formdata.Procedimiento["SI-PlanTratamiento"]) {
      setSecondForm(true);
    } else {
      setShowModal(!showModal);
    }
  };

  const BodyModalComponent = () => {
    if (secondForm) {
      return (
        <AppForm
          form={Forms.createAppoimentProcedure()}
          onSubmit={(e) =>
            createAppointment({
              PersonDocument: patient.PersonDocument,
              doctorId: JSON.parse(window.localStorage.getItem("user")).id,
              ...e,
              status: "En proceso",
            })
          }
          loadedData={{}}
        />
      );
    } else {
      return (
        <AppForm
          form={Forms.CreateProcedure()}
          onSubmit={(e) =>
            registerProcedure({ DatosCita: patient, Procedimiento: e })
          }
          loadedData={{}}
        />
      );
    }
  };

  const createAppointment = async (formData) => {
    try {
      let { message } = create(formData);
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
    console.log(formData);
  };

  return (
    <Table>
      <Table.Head className="text-center">
        <Table.HeadCell>Fecha</Table.HeadCell>
        <Table.HeadCell>Hora</Table.HeadCell>
        <Table.HeadCell>Razon</Table.HeadCell>
        <Table.HeadCell>Nombre del paciente</Table.HeadCell>
        <Table.HeadCell>Especialidad</Table.HeadCell>
        <Table.HeadCell>Estado</Table.HeadCell>
        <Table.HeadCell>Acciones</Table.HeadCell>
      </Table.Head>

      <Table.Body className="divide-y">
        {appoiments.map((e) => (
          <Table.Row
            key={e.document}
            className="bg-white dark:border-gray-700 dark:bg-gray-800 text-center"
          >
            <Table.Cell>{e.date}</Table.Cell>
            <Table.Cell>{e.time}</Table.Cell>
            <Table.Cell>{e.reason}</Table.Cell>
            <Table.Cell>{`${e.Person?.name} ${e.Person?.lastName} `}</Table.Cell>
            <Table.Cell>{e.specialty?.name}</Table.Cell>
            <Table.Cell>{e.status}</Table.Cell>
            <Table.Cell>
              {e.status !== "Completada" && (
                <Button
                  size="xs"
                  pill
                  color="success"
                  className="mx-auto"
                  onClick={() => {
                    handleToggleModal(e);
                  }}
                >
                  Registrar Tratamiento
                </Button>
              )}

              <ModalComponent
                show={showModal}
                onClose={() => {
                  setShowModal(!showModal);
                  setSecondForm(false);
                }}
                header={`Registro Procedimiento`}
                body={<BodyModalComponent />}
                footer={""}
                size="3xl"
              />
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}

export default ListAppoimentsDoctor;
