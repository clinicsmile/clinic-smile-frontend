import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppForm } from "../../components/form/AppForm";
import { Forms } from "../../data/form/Forms";
import { services } from "../../services/services";
import Swal from "sweetalert2";

function Register() {
  let navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState(null);

  useEffect(() => {
    ObtenerFormulario();
  }, []);

  const ObtenerFormulario = async () => {
    const data = await Forms.registerFormPatient();
    console.log(data);
    setForm(data);
    return data;
  };

  const toRegister = async (formData) => {
    setLoading(true);
    try {
      formData.rolId = "3";
      let response = await services.register(formData);
      if (response.error) {
        Swal.fire({
          title: response.error,
          icon: "error",
          showConfirmButton: true,
        });
        return;
      }
      Swal.fire({ title: "Usuario Registrado con exito", icon: "success" });
      navigate("/");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-[url('/src/assets/backGround.png')] bg-cover bg-center">
      <div className="m-auto md:w-4/5 lg:w-1/3 h-3/4 p-6 rounded-lg bg-white shadow-2xl columns-1 hover:scale-105">
        <div className="h-full">
          <div className="flex h-1/5 justify-center pb-3">
            <img src="./logo.svg" />
          </div>
          <div className="h-4/5 overflow-y-scroll overflow-x-hidden">
            {form ? (
              <AppForm
                form={form}
                onSubmit={(e) => toRegister(e)}
                loading={loading}
              />
            ) : (
              <div>Cargando Formulario...</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
