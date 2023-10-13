import { useEffect, useState } from "react";
import { AppForm } from "../../components/form/AppForm";
import { Forms } from "../../data/form/Forms";
import { services } from "../../services/services";
import Swal from "sweetalert2";

function GetProcedures() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {}, []);

  const consultProcedures = async (formData) => {
    setLoading(true);
    await services
      .login(formData, newSession)
      .then(async (value) => {
        console.log(value);
        switch (value) {
          case 400: {
            Swal.fire({
              position: "center",
              icon: "error",
              title: "Credenciales invalidas",
              text: "Por favor intentelo nuevamente",
            });
            break;
          }
          case 409: {
            Swal.fire({
              title: "Ya tiene una sesion activa",
              text: "Desea ingresar con una sesion nueva?",
              icon: "info",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Si",
              cancelButtonText: "No",
            }).then((result) => {
              if (result.isConfirmed) {
                toLogin(formData, true);
              }
            });
            break;
          }
          case true: {
            navigate("/home");
            break;
          }
          default: {
            Swal.fire({
              position: "center",
              icon: "error",
              title: "Ocurrio un error al iniciar sesion",
            });
            break;
          }
        }
      })
      .finally(setLoading(false));
  };

  return (
    <div className="justify-center flex flex-col">
      <AppForm
            form={Forms.consultProcedures()}
            onSubmit={(e) => consultProcedures(e)}
            loading={loading}
          />
    </div>
  );
}

export default GetProcedures;
