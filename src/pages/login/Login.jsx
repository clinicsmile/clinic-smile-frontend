import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppForm } from "../../components/form/AppForm";
import { Forms } from "../../data/form/Forms";
import axios from "axios";
import { API } from "../../common/config";

async function signIn(formData) {
  try {
    let response = await axios.get(`${API.url}/auth`, {
      headers: {
        "Content-Type": "application/json",
        authorization: `Basic ${btoa(
          formData.username + ":" + formData.password
        )}`,
      },
    });
    if (response.data.ok) {
      document.cookie = `token=${response.data.token}; path=/; samesite=strict`;
      window.localStorage.setItem("user", JSON.stringify(response.data.user));
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
}

function Login() {
  let navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const toLogin = async (formData) => {
    setLoading(true);
    try {
      let validacion = await signIn(formData);
      if (validacion) {
        navigate("/home");
      } else {
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
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
