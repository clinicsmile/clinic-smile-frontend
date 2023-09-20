import { Table, Button, Modal } from "flowbite-react";
import { useState, useEffect } from "react";
import { AppForm } from "../../components/form/AppForm";
import { Forms } from "../../data/form/Forms";
import { LiaExclamationCircleSolid } from "react-icons/lia";
import { validate } from "../../middlewares/validateLogin";
import { services } from "../../services/services";
import Swal from "sweetalert2";
import ModalComponent from "../../components/modal/Modal";
import { Spinner } from "flowbite-react";

function Users() {
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingPage, setLoadingPage] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page) => setCurrentPage(page);

  const [showModal, setShowModal] = useState(false);
  const [currentForm, setCurrentForm] = useState(Forms.rolField());
  const [currentType, setCurrentType] = useState(null);
  const [rolId, setRolId] = useState(null);
  const [users, setUser] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const handleToggleModal = (type = "") => {
    setCurrentType(type);
    setShowModal(!showModal);
    let formToChange = {};

    if (type === "create") {
      setCurrentUser({});
      formToChange = Forms.rolField();
    } else {
      formToChange =
        currentUser.rolId == 2 ? Forms.editDoctor() : Forms.editPatient();
    }
    setCurrentForm(formToChange);
  };

  const register = async (formData) => {
    setLoading(true);
    formData.rolId = rolId;
    try {
      let { message } = await services.register(formData);
      Swal.fire({
        title: message,
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });
      handleToggleModal();
      getUsers();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const edit = async (formData) => {
    setLoading(true);
    try {
      let { message } = await services.edit(formData);
      Swal.fire({
        title: message,
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });
      handleToggleModal();
      getUsers();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const toDelete = async (formData) => {
    await services
      .deleteUser(formData)
      .then(async () => {
        await Swal.fire({
          title: "Usuario eliminado con exito",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
        getUsers();
      })
      .catch(async () => {
        await Swal.fire({
          title: "Ocurrio un error al eliminar el usuario",
          icon: "error",
          timer: 1500,
          showConfirmButton: false,
        });
      });
  };

  const getUsers = async () => {
    setLoadingPage(true);
    try {
      const res = await services.usersList();
      setUser(res);
    } catch (error) {
      await Swal.fire({
        title: "Ocurrio un error al obtener los usuarios",
        icon: "error",
        timer: 1500,
        showConfirmButton: false,
      });
    } finally {
      setLoadingPage(false);
    }
  };

  const handleSelectChange = (value) => {
    const forms = {
      1: Forms.registerFormAdmin(),
      2: Forms.registerFormDoctor(),
      3: Forms.registerFormPatient(),
    };
    const form = forms[value] || Forms.editAdmin();
    setCurrentForm(form);
    setRolId(value);
  };

  const BodyModalComponent = () => {
    const types = {
      create: (
        <AppForm
          form={currentForm}
          onSubmit={(e) => register(e)}
          loading={loading}
          onSelectChange={handleSelectChange}
        />
      ),
      edit: (
        <AppForm
          form={currentForm}
          onSubmit={(e) => edit(e)}
          loading={loading}
          loadedData={currentUser}
        />
      ),
    };

    return types[currentType] || <></>;
  };

  const SpinnerComponent = () => {
    return (
      <div className="flex justify-center items-center m-4 ">
        <Spinner
          color="warning"
          size="lg"
          className="flex justify-center items-center "
        />
      </div>
    );
  };

  if (validate) {
    return (
      <>
        <div className="flex h-screen items-center ">
          <div className="w-full h-5/6 m-6 bg-white rounded-3xl p-6">
            <div className="justify-between flex">
              <h1 className="text-4xl text-center w-1/2 my-3">
                Gestión de usuarios
              </h1>

              <Button
                pill
                color="warning"
                className="mx-auto w-32"
                onClick={() => handleToggleModal("create")}
              >
                Crear
              </Button>

              <ModalComponent
                show={showModal}
                onClose={() => handleToggleModal(currentType)}
                header={`${
                  currentType == "create" ? "Crear" : "Editar"
                } Usuario`}
                body={<BodyModalComponent />}
                footer={""}
              />
            </div>

            <div className="overflow-y-scroll">
              {loadingPage ? (
                <SpinnerComponent />
              ) : (
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
                                handleToggleModal("edit");
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
                            <Modal //este modal es el de eliminar
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
                            </Modal>
                          </div>
                        </Table.Cell>
                      </Table.Row>
                    ))}
                  </Table.Body>
                </Table>
              )}
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
