import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppForm } from "../../components/form/AppForm";
import { createNoAuthForm } from "../../data/form/appointments";
import { createNoAuth } from "../../services/appointments";
import AppButton from "../../components/ui/button/AppButton";
import Swal from "sweetalert2";

function CreateAppoimentNoAuth() {
  let navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState(null);

  useEffect(() => {
    ObtenerFormulario();
  }, []);

  const ObtenerFormulario = async () => {
    const data = await createNoAuthForm();
    console.log(data);
    setForm(data);
    return data;
  };

  const createAppoinment = async (formData) => {
    console.log(formData);
    //validar time para que sea de 7 a 5
    const hora = formData.time.split(":");
    if (parseInt(hora[0]) < 7 || parseInt(hora[0]) > 16) {
      Swal.fire({
        title: "La hora no es valida",
        text: "Horario de atencion de 7:00 A.M. a 05:00 P.M.",
        position: "center",
        icon: "error",
        showConfirmButton: true,
      });
      return;
    }

    setLoading(true);
    try {
      await createNoAuth(formData);
      await Swal.fire({
        title: "Cita creada correctamente",
        text: "para acceder a la plataforma su usuario es su nuimero de documento y la contraseña son los ultimos 4 digitos de su documento",
        icon: "success",
        timer: 5000,
        showConfirmButton: false,
      });
      navigate("/login");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-[url('/src/assets/backGround.png')] bg-cover bg-center">
      <div className="m-auto md:w-4/5 lg:w-1/4 sm:w-1/2 h-5/6 p-1 rounded-lg bg-white shadow-2xl columns-1">
        <div className="h-full">
          <div className="flex h-1/5 justify-center pb-3">
            <img src="./logo.svg" className="max-w-xs" />
          </div>
          <div className="h-4/5 overflow-y-scroll overflow-x-hidden flex-col items-center">
            {form ? (
              <AppForm
                form={form}
                onSubmit={(e) => createAppoinment(e)}
                loading={loading}
              />
            ) : (
              <div>Cargando Formulario...</div>
            )}
            <AppButton
              title={"Regresar al inicio"}
              type={"secondaryClass"}
              customClass={"w-full"}
              action={() => navigate("/login")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateAppoimentNoAuth;
