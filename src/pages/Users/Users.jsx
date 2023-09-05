import { SideBar } from "../../components/sidebar/SideBar";
import { Table, Button, Modal, Pagination } from 'flowbite-react';
import { useState } from 'react';
import { AppForm } from "../../components/form/AppForm";
import { profileForm, registerForm, EditProfile } from "../../data/form/FormFields";
import { LiaExclamationCircleSolid } from "react-icons/lia";

let personas = [
  {
    document: "12345",
    name: "Juan",
    lastname: "Pérez",
    cellphone: "555-123-4567",
    email: "juan.perez@example.com",
  },
  {
    document: "67890",
    name: "María",
    lastname: "González",
    cellphone: "555-987-6543",
    email: "maria.gonzalez@example.com",
  },
  {
    document: "13579",
    name: "Carlos",
    lastname: "Rodríguez",
    cellphone: "555-567-8901",
    email: "carlos.rodriguez@example.com",
  },
  {
    document: "24680",
    name: "Ana",
    lastname: "López",
    cellphone: "555-234-5678",
    email: "ana.lopez@example.com",
  },
  {
    document: "54321",
    name: "Luis",
    lastname: "Martínez",
    cellphone: "555-876-5432",
    email: "luis.martinez@example.com",
  },
];


function Users() {
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState("");
  const props = { openModal, setOpenModal, email, setEmail };
  const [loading, setLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page) => setCurrentPage(page);

  const toLogin = async (formData) => {
    setLoading(true);
    try {
      // await signIn(formData);
      // navigate("/cites");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className=" flex w-sceen h-screen items-center bg-[#1783B0]">
        <div className="h-5/6 w-1/5">
          <SideBar />
        </div>
        <div className="w-4/5 h-5/6 m-6 bg-white rounded-3xl p-6">
          <div className="justify-between flex">
            <h1 className="text-4xl text-center w-1/2 my-3">GESTION DE USUARIOS</h1>
            <div className="w-1/2">
              <Button
                pill color="warning"
                className="mx-auto w-32"
                onClick={() => props.setOpenModal('form-elements')}>
                Crear
              </Button>
              <Modal show={props.openModal === 'form-elements'} size="md" popup onClose={() => props.setOpenModal(undefined)}>
                <Modal.Header />
                <Modal.Body>
                  <div className="space-y-6">
                    <AppForm form={EditProfile} onSubmit={(e) => toLogin(e)} loading={loading} />
                  </div>
                </Modal.Body>
              </Modal>
            </div>
          </div>
          <div>

            <Table>
              <Table.Head className="text-center">
                <Table.HeadCell>Documento</Table.HeadCell>
                <Table.HeadCell>Nombre</Table.HeadCell>
                <Table.HeadCell>Apellido</Table.HeadCell>
                <Table.HeadCell>Celular</Table.HeadCell>
                <Table.HeadCell>Correo</Table.HeadCell>
                <Table.HeadCell>Acciones</Table.HeadCell>
              </Table.Head>

              <Table.Body className="divide-y">

                {personas.map((e) => (
                  <Table.Row
                    key={e.document}
                    className="bg-white dark:border-gray-700 dark:bg-gray-800 text-center"
                  >
                    <Table.Cell>{e.document}</Table.Cell>
                    <Table.Cell>{e.name}</Table.Cell>
                    <Table.Cell>{e.lastname}</Table.Cell>
                    <Table.Cell>{e.cellphone}</Table.Cell>
                    <Table.Cell>{e.email}</Table.Cell>
                    <Table.Cell>
                      <div className="flex text-center justify-center">
                        <Button
                          size="xs" pill color="warning" className="mx-2"
                          onClick={() => props.setOpenModal('form-elements')}>
                          Editar
                        </Button>
                        <Button
                          size="xs" pill color="failure" className="mx-2"
                          onClick={() => props.setOpenModal('pop-up')}>
                          Eliminar
                        </Button>
                        <Modal show={props.openModal === 'pop-up'} size="md" popup onClose={() => props.setOpenModal(undefined)}>
                          <Modal.Header />
                          <Modal.Body>
                            <div className="text-center">
                              <LiaExclamationCircleSolid className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                                Esta seguro que quiere eliminar este registro?
                              </h3>
                              <div className="flex justify-center gap-4">
                                <Button color="failure" onClick={() => props.setOpenModal(undefined)}>
                                  Si, continuar
                                </Button>
                                <Button color="gray" onClick={() => props.setOpenModal(undefined)}>
                                  No, cancelar
                                </Button>
                              </div>
                            </div>
                          </Modal.Body>
                        </Modal>
                      </div>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>

            </Table>

          </div>
        </div>
      </div>
    </>
  );
}

export default Users;
