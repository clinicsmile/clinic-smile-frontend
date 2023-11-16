import { Table, Button, Modal } from "flowbite-react";
import { services } from "../../services/services";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";
import { EditAppointment } from "../appointments";
import { LiaExclamationCircleSolid } from "react-icons/lia";

function ListAppoimentsPatient() {
  const [appoiments, setAppoiments] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [currentRegister, setCurrentRegister] = useState(false);

  useEffect(() => {
    getAppoiments();
  }, []);

  const getAppoiments = async () => {
    try {
      const res = await services.getPatientAppoiments();
      setAppoiments(res);
    } catch (error) {
      console.log(error);
      await Swal.fire({
        title: "Ocurrio un error al obtener los usuarios",
        icon: "error",
        timer: 1500,
        showConfirmButton: false,
      });
    }
  };

  const toDelete = async (formData) => {
    await services
      .cancelAppoiment(formData)
      .then(async () => {
        await Swal.fire({
          title: "Cita cancelada con exito",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
        getAppoiments();
      })
      .catch(async () => {
        await Swal.fire({
          title: "Ocurrio un error al cancelar la cita",
          icon: "error",
          timer: 1500,
          showConfirmButton: false,
        });
      });
  };

  return (
    <Table hoverable striped className="text-center p-6">
      <Table.Head >
        <Table.HeadCell className="bg-[--primary] text-white">Fecha</Table.HeadCell>
        <Table.HeadCell className="bg-[--primary] text-white">Hora</Table.HeadCell>
        <Table.HeadCell className="bg-[--primary] text-white">Razon</Table.HeadCell>
        <Table.HeadCell className="bg-[--primary] text-white">Nombre del doctor</Table.HeadCell>
        <Table.HeadCell className="bg-[--primary] text-white">Especialidad</Table.HeadCell>
        <Table.HeadCell className="bg-[--primary] text-white">Estado</Table.HeadCell>
        <Table.HeadCell className="bg-[--primary] text-white">Acciones</Table.HeadCell>
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
            <Table.Cell>
              {e.doctor
                ? `${e.doctor?.Person?.name} ${e.doctor?.Person?.lastName}`
                : "Sin Asignar"}
            </Table.Cell>
            <Table.Cell>{e.specialty.name}</Table.Cell>
            <Table.Cell>{e.status}</Table.Cell>
            <Table.Cell>
              {e.status === "En proceso" && (
                <div className="grid grid-cols-1">
                  <div className="col-span-1 my-auto">
                    <Button
                      size="xs"
                      pill
                      color="failure"
                      onClick={() => {
                        setOpenModal("pop-up");
                        setCurrentRegister(e);
                      }}
                    >
                      Cancelar
                    </Button>
                  </div>
                </div>
              )}
              {e.status === "Pendiente" && (
                <div className="grid xl:grid-cols-2 grid-cols-1">
                  <EditAppointment
                    appointment={{ ...e.Person, ...e }}
                    onComplete={() => getAppoiments()}
                  />
                  <Button
                    size="xs"
                    pill
                    color="failure"
                    className="my-auto"
                    onClick={() => {
                      setOpenModal("pop-up");
                      setCurrentRegister(e);
                    }}
                  >
                    Cancelar
                  </Button>
                </div>
              )}

              <Modal //este modal es el de cancelar
                show={openModal === "pop-up"}
                size="md"
                popup
                onClose={() => setOpenModal(undefined)}
              >
                <Modal.Header />
                <Modal.Body>
                  <div className="text-center">
                    <LiaExclamationCircleSolid className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                    <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                      ¿Está seguro que quiere eliminar este registro?
                    </h3>
                    <div className="flex justify-center gap-4">
                      <Button
                        color="failure"
                        onClick={() => {
                          setOpenModal(undefined);
                          toDelete(currentRegister);
                        }}
                      >
                        Si, continuar
                      </Button>
                      <Button
                        color="gray"
                        onClick={() => setOpenModal(undefined)}
                      >
                        No, cancelar
                      </Button>
                    </div>
                  </div>
                </Modal.Body>
              </Modal>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}

export default ListAppoimentsPatient;
