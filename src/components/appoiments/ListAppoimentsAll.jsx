import { Table, Button, Modal } from "flowbite-react";
import { services } from "../../services/services";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";
import { LiaExclamationCircleSolid } from "react-icons/lia";

import { EditAppointment } from "../appointments";

function ListAppoimentsAll() {
  const [appoiments, setAppoiments] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [currentRegister, setCurrentRegister] = useState(false);

  useEffect(() => {
    getAppoiments();
  }, []);

  const getAppoiments = async () => {
    try {
      const res = await services.getAllAppoiments();
      console.log(res);
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

  const listDoctor = (list) => {
    console.log(list);
    return `<select id="SelectDoctor" class="form-select">${list.map(
      (element) =>
        `<option value="${element.id}">${element.Person?.name} ${element.Person.lastName}</option>`
    )}</select>`;
  };

  const assignDoctor = async (cita) => {
    try {
      const Doctors = await services.getDoctors();

      Swal.fire({
        title: "Seleccione el doctor a asignar",
        html: listDoctor(Doctors),
        preConfirm: async () => {
          const Doctor = document.getElementById("SelectDoctor").value;
          await services.assignDoctor(cita.id, Doctor, "En proceso");
          await Swal.fire({
            title: "Doctor Asignado correctamente",
            icon: "success",
            timer: 1500,
            showConfirmButton: false,
          });
          getAppoiments();
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const toDelete = async (formData) => {
    console.log(formData);
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
    <Table>
      <Table.Head className="text-center">
        <Table.HeadCell>Fecha</Table.HeadCell>
        <Table.HeadCell>Hora</Table.HeadCell>
        <Table.HeadCell>Razon</Table.HeadCell>
        <Table.HeadCell>Nombre del paciente</Table.HeadCell>
        <Table.HeadCell>Nombre del Doctor</Table.HeadCell>
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
            <Table.Cell>{`${e.Person?.name} ${e.Person?.lastName}`}</Table.Cell>
            <Table.Cell>
              {e.doctor
                ? `${e.doctor?.Person?.name} ${e.doctor?.Person?.lastName}`
                : "Sin Asignar"}
            </Table.Cell>
            <Table.Cell>{e.specialty?.name}</Table.Cell>
            <Table.Cell>{e.status}</Table.Cell>
            <Table.Cell>
              <div className="flex text-center justify-center">
                {(e.status === "En proceso" || e.status === "Pendiente") && (
                  <div>
                    <EditAppointment appointment={e} />

                    <Button
                      size="xs"
                      pill
                      color="failure"
                      className="mx-2"
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

                {!e.doctor && e.status !== "Cancelada" && (
                  <Button
                    size="xs"
                    pill
                    color="success"
                    className="mx-2"
                    onClick={() => {
                      assignDoctor(e);
                    }}
                  >
                    Asignar
                  </Button>
                )}
              </div>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}

export default ListAppoimentsAll;
