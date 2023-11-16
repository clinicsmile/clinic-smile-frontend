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
  const [form, setForm] = useState(null);
  const handleToggleModal = (form) => {
    setPatient(form);
    setShowModal(true);
  };

  useEffect(() => {
    getAppoiments();
  }, []);

  useEffect(() => {
    getForm();
  }, [secondForm]);

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

  const convertToFormData = (data) => {
    let formData = new FormData();
    for (const key in data) {
      formData.append(key, JSON.stringify(data[key]));
    }
    return formData;
  };

  const registerProcedure = async (data) => {
    try {
      let response = await services.registerProcedure(data);

      // let formData = new FormData();
      let formData = { id: response.id, media: data.Procedimiento["media"] };
      // formData.append("media", data.Procedimiento["media"]);
      // formData.append("id", response.id);

      await services.uploadImageProcedure(formData);

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
    if (data.Procedimiento["SI-PlanTratamiento"]) {
      setSecondForm(true);
    } else {
      setShowModal(!showModal);
    }
  };

  const getForm = async () => {
    if (secondForm) {
      const data = await Forms.createAppoimentProcedure();
      setForm(data);
    } else {
      const data = await Forms.CreateProcedure();
      setForm(data);
    }
  };
  const BodyModalComponent = () => {
    if (secondForm) {
      return (
        <AppForm
          form={form}
          onSubmit={(e) =>
            createAppointment({
              PersonId: patient.PersonId,
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
          form={form}
          onSubmit={(e) =>
            registerProcedure({ DatosCita: patient, Procedimiento: e })
          }
          loadedData={{}}
        />
      );
    }
  };

  const createAppointment = async (formData) => {
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
  };

  return (
    <Table hoverable striped className="text-center p-6">
      <Table.Head >
        <Table.HeadCell className="bg-[--primary] text-white">Fecha</Table.HeadCell>
        <Table.HeadCell className="bg-[--primary] text-white">Hora</Table.HeadCell>
        <Table.HeadCell className="bg-[--primary] text-white">Razon</Table.HeadCell>
        <Table.HeadCell className="bg-[--primary] text-white">Nombre del paciente</Table.HeadCell>
        <Table.HeadCell className="bg-[--primary] text-white">Especialidad</Table.HeadCell>
        <Table.HeadCell className="bg-[--primary] text-white">Estado</Table.HeadCell>
        <Table.HeadCell className="bg-[--primary] text-white">Acciones</Table.HeadCell>
      </Table.Head>

      <Table.Body className="divide-y">
        {appoiments.map((e) => (
          <Table.Row
            key={e.id}
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
