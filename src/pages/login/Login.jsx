import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppForm } from "../../components/form/AppForm";
import { Forms } from "../../data/form/Forms";
import { services } from "../../services/services";
import Swal from "sweetalert2";

function Login() {
  let navigate = useNavigate();
  const url = window.location.href;

  const [loading, setLoading] = useState(false);
  const [logo, setLogo] = useState("./logo.svg");

  function setColors(brand) {
    document
      .querySelector("body")
      .style.setProperty("--primary", brand.primaryColor);
    document
      .querySelector("body")
      .style.setProperty("--secondary", brand.secundaryColor);
  }

  useEffect(() => {
    async function getConfigBrand() {
      try {
        let data = { location: "localhost" };
        const response = await services.getBrand(data);
        setColors(response);
        console.log(response);
        setLogo(response.logo);
        window.localStorage.setItem("brand", JSON.stringify(response));
      } catch (error) {
        console.log(error);
      }
    }
    getConfigBrand();
  }, []);

  const toLogin = async (formData, newSession = false) => {
    setLoading(true);
    await services
      .login(formData, newSession)
      .then(async (value) => {
        switch (value) {
          case 401: {
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
    <div className="h-screen w-screen flex justify-center items-center bg-[url('/src/assets/backGround.png')] bg-cover bg-center">
      <div className="m-auto justify-center items-center flex w-fit h-fit p-6 rounded-lg bg-white shadow-2xl container">
        <div className="flex flex-col">
          <img src={logo} className="flex mb-6 max-w-xs" />
          <div className="justify-center flex flex-col">
            <AppForm
              form={Forms.login}
              onSubmit={(e) => toLogin(e)}
              loading={loading}
            />
            <div className="flex justify-center mt-4">
              <span>¿No estás registrado? </span>
              <span className="text-cyan-600 hover:underline dark:text-cyan-500 hover:scale-105">
                <a href="/register">Regístrate AQUI</a>
              </span>
            </div>
            <div className="flex justify-center mt-4">
              <span className="text-cyan-600 hover:underline dark:text-cyan-500 hover:scale-105">
                <a href="/create-appoinment">Solicitar cita sin registro</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
