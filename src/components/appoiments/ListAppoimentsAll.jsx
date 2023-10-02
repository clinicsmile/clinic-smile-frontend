import { Table } from "flowbite-react";
import { services } from "../../services/services";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";

function ListAppoimentsAll() {
  const [appoiments, setAppoiments] = useState([]);

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
    }
  };

  return (
    <Table>
      <Table.Head className="text-center">
        <Table.HeadCell>Fecha</Table.HeadCell>
        <Table.HeadCell>Hora</Table.HeadCell>
        <Table.HeadCell>Razon</Table.HeadCell>
        <Table.HeadCell>Nombre del paciente</Table.HeadCell>
        <Table.HeadCell>Especialidad</Table.HeadCell>
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
            <Table.Cell>{e.Person.name}</Table.Cell>
            <Table.Cell>{e.specialty.name}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}

export default ListAppoimentsAll;
