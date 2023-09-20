import { Forms } from "../../data/form/Forms";
import { AppForm } from "../form/AppForm";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";
import { services } from "../../services/services";

const AppProfile = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  const getUser = async () => {
    try {
      const res = await services.getCurrentProfile();
      setUser(res);
    } catch (error) {
      Swal.fire({
        title: "Ocurrio un error al obtener los datos del perfil",
        position: "center",
        icon: "error",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const update = async (formData) => {
    formData.documentTypeId = 1;
    formData.genderId = 1;
    let alert = { position: "center", showConfirmButton: false, timer: 2000 };
    try {
      await services.updateProfile(formData);
      alert.icon = "success";
      alert.title = "Se actualizó el perfil satisfactoriamente";
    } catch (error) {
      alert.icon = "error";
      alert.title = "Ocurrio un error al actualizar los datos";
    } finally {
      Swal.fire(alert);
    }
  };

  const toUpdate = async (formData) => {
    setLoading(true);
    try {
      await update(formData);
      getUser();
      // location.reload();
    } finally {
      setLoading(false);
    }
  };
  // Verificar si 'user' es null antes de renderizar
  if (user === null) {
    return null;
  }

  return user.rolId == 2 ? (
    <AppForm
      form={Forms.editProfileDoctor()}
      loadedData={user}
      onSubmit={(e) => toUpdate(e)}
    />
  ) : (
    <AppForm
      form={Forms.editProfilePatient()}
      loadedData={user}
      onSubmit={(e) => toUpdate(e)}
    />
  );
};

export { AppProfile };
