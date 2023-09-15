import { SideBar } from "../../components/sidebar/SideBar";
import { Table, Button, Modal, Pagination } from "flowbite-react";
import { useState, useEffect } from "react";
import { AppForm } from "../../components/form/AppForm";
import { EditProfile } from "../../data/form/FormFields";
import { LiaExclamationCircleSolid } from "react-icons/lia";
import axios from "axios";
import { API } from "../../common/config";
function Users() {
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

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
  const [users, setUser] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const res = await axios.get(`${API.url}/Users`);
    setUser(res.data);
  };
  if (window.localStorage.getItem("username") != null) {
    return (
      <>
        <div className="flex h-screen items-center ">
          <div className="w-full h-5/6 m-6 bg-white rounded-3xl p-6">
            <div className="justify-between flex">
              <h1 className="text-4xl text-center w-1/2 my-3">
                Gestión de usuarios
              </h1>
              <div className="w-1/2">
                <Button
                  pill
                  color="warning"
                  className="mx-auto w-32"
                  onClick={() => setOpenModal("form-elements")}
                >
                  Crear
                </Button>

                <Modal
                  show={openModal === "form-elements"}
                  size="md"
                  popup
                  onClose={() => {
                    setCurrentUser({});
                    setOpenModal(undefined);
                  }}
                >
                  <Modal.Header />
                  <Modal.Body>
                    <div className="space-y-6">
                      <AppForm
                        form={EditProfile}
                        onSubmit={(e) => toLogin(e)}
                        loading={loading}
                        loadedData={currentUser}
                      />
                    </div>
                  </Modal.Body>
                </Modal>
              </div>
            </div>
            <div>
              <div className="overflow-y-scroll">
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
                    {users.map((e) => (
                      <Table.Row
                        key={e.document}
                        className="bg-white dark:border-gray-700 dark:bg-gray-800 text-center"
                      >
                        <Table.Cell>{e.document}</Table.Cell>
                        <Table.Cell>{e.name}</Table.Cell>
                        <Table.Cell>{e.lastName}</Table.Cell>
                        <Table.Cell>{e.cellPhone}</Table.Cell>
                        <Table.Cell>{e.email}</Table.Cell>
                        <Table.Cell>
                          <div className="flex text-center justify-center">
                            <Button
                              size="xs"
                              pill
                              color="warning"
                              className="mx-2"
                              onClick={() => {
                                setCurrentUser(e);
                                setOpenModal("form-elements");
                              }}
                            >
                              Editar
                            </Button>
                            <Button
                              size="xs"
                              pill
                              color="failure"
                              className="mx-2"
                              onClick={() => setOpenModal("pop-up")}
                            >
                              Eliminar
                            </Button>
                            <Modal
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
                                    ¿Está seguro que quiere eliminar este
                                    registro?
                                  </h3>
                                  <div className="flex justify-center gap-4">
                                    <Button
                                      color="failure"
                                      onClick={() => setOpenModal(undefined)}
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
                          </div>
                        </Table.Cell>
                      </Table.Row>
                    ))}
                  </Table.Body>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    location.href = "/login";
  }
}

export default Users;
