import { Table, Button } from "flowbite-react";
import { services } from "../../services/services";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";

function ListAppoimentsPending() {
  const [appoiments, setAppoiments] = useState([]);

  useEffect(() => {
    getAppoiments();
  }, []);

  const getAppoiments = async () => {
    try {
      const res = await services.getPendingAppoiments();
      setAppoiments(res);
    } catch (error) {
      await Swal.fire({
        title: "Ocurrio un error al obtener los usuarios",
        icon: "error",
        timer: 1500,
        showConfirmButton: false,
      });
    }
  };

  const assignDoctor = async (cita) => {
    try {
      let doctor = JSON.parse(localStorage.getItem("user"));
      await services.assignDoctor(cita.id, doctor.id, "En proceso");
      Swal.fire({
        title: "Cita tomada correctamente",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });
      getAppoiments();
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Ocurrio un error al tomar la cita",
        icon: "error",
        timer: 1500,
        showConfirmButton: false,
      });
    }
  };

  return (
    <Table>
      <Table.Head className="text-center">
        <Table.HeadCell>#</Table.HeadCell>
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
            <Table.Cell>{e.id}</Table.Cell>
            <Table.Cell>{e.date}</Table.Cell>
            <Table.Cell>{e.time}</Table.Cell>
            <Table.Cell>{e.reason}</Table.Cell>
            <Table.Cell>{`${e.Person?.name} ${e.Person?.lastName}`}</Table.Cell>
            <Table.Cell>{e.specialty.name}</Table.Cell>
            <Table.Cell>{e.status}</Table.Cell>

            <Table.Cell>
              <div className="flex text-center justify-center">
                {!e.doctor && (
                  <Button
                    size="xs"
                    pill
                    color="success"
                    className="mx-2"
                    onClick={() => {
                      assignDoctor(e);
                    }}
                  >
                    Tomar
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

export default ListAppoimentsPending;
