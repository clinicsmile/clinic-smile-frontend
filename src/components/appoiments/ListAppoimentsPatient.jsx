import { Table, Button, } from "flowbite-react";
import { services } from "../../services/services";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";


function ListAppoimentsPatient(){
  const [appoiments, setAppoiments] = useState([]);  

  useEffect(() => {
    getAppoiments();
  }, []);

  const getAppoiments = async () => {
    try {
      const res = await services.getPatientAppoiments();
      console.log(res)
      setAppoiments(res);
    } catch (error) {
      console.log(error)
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
        <Table.HeadCell>Nombre del doctor</Table.HeadCell>
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
            <Table.Cell>{e.doctor.Person.name}</Table.Cell> 
            <Table.Cell>{e.specialty.name}</Table.Cell>
            <Table.Cell>
              <div className="flex text-center justify-center">
                <Button
                  size="xs"
                  pill
                  color="warning"
                  className="mx-2"                  
                >
                  Editar
                </Button>

                <Button
                  size="xs"
                  pill
                  color="failure"
                  className="mx-2"
                >
                  Eliminar
                </Button>
                {/* <Modal //este modal es el de eliminar
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
                            toDelete(e);
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
                </Modal> */}
              </div>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}

export default ListAppoimentsPatient;