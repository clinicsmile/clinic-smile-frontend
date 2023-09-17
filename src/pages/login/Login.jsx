import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppForm } from "../../components/form/AppForm";
import { Forms } from "../../data/form/Forms";
import { services } from "../../services/services";

function Login() {
  let navigate = useNavigate();
  const url = window.location.href;

  const [loading, setLoading] = useState(false);

  function setColor(newColor) {
    document.documentElement.style.setProperty("--primary", newColor);
  }

  useEffect(() => {
    async function getConfigBrand() {
      try {
        let data = { location: "url" };
        const response = await getBrand(data);
        setColor(response.primaryColor);
      } catch (error) {
        console.log(error);
      }
    }
    getConfigBrand();
  }, []);

  const toLogin = async (formData) => {
    setLoading(true);
    await services.login(formData).then((value) => {
      if (value) {
        navigate("/home");
      } else {
        navigate("/login");
      }
      setLoading(false);
    });
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-[url('/src/assets/backGround.png')] bg-cover bg-center">
      <div className="m-auto justify-center items-center flex w-fit h-fit p-6 rounded-lg bg-white shadow-2xl container">
        <div className="flex flex-col">
          <img src="./logo.svg" className="flex mb-6" />
          <div className="justify-center flex flex-col">
            <AppForm
              form={Forms.login}
              onSubmit={(e) => toLogin(e)}
              loading={loading}
            />
            <div className="flex justify-center mt-4">
              <span>¿No estás registrado? </span>
              <span className="text-cyan-600 hover:underline dark:text-cyan-500 hover:scale-105">
                <a href="/register"> Regístrate AQUI</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
