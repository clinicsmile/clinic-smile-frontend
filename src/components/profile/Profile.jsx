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
    try {
      await services.updateProfile(formData);
      await Swal.fire({
        position: "center",
        icon: "success",
        title: "Se actualizó el perfil satisfactoriamente",
        showConfirmButton: false,
        timer: 2000,
      });
    } catch (error) {
      await Swal.fire({
        position: "center",
        icon: "error",
        title: "Ocurrio un error al actualizar los datos",
        showConfirmButton: false,
        timer: 2000,
      });
      return false;
    }
  };

  const toUpdate = async (formData) => {
    setLoading(true);
    try {
      await update(formData);
      location.reload();
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
