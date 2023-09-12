import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {AppForm} from "../../components/form/AppForm";
import { login } from "../../data/form/FormFields";
import { Label } from "flowbite-react";

async function signIn(formData){
  try {
    let response = await fetch("http://192.168.1.102:5000/Auth",{
      method:"post",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(formData)
    });
    if(response.ok){
      return true;
    }else{
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
      if(validacion){
        navigate("/home");
      }else{
        navigate("/login")
      }

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-[url('/src/assets/backGround.png')] bg-cover bg-center">
      <div className="m-auto w-1/3 h-3/4 p-6 rounded-lg bg-white shadow-2xl container columns-1 hover:scale-105">
        <div className="grid-rows-3 h-full">
          <div className="flex h-1/3 justify-center">
            <img src="./logo.svg" />
          </div>
          <div className="h-1/2 justify-center">
            <AppForm
              form={login}
              onSubmit={(e) => toLogin(e)}
              loading={loading}
            />
          </div>
          <div className=" flex h-1/5 justify-center">
            <Label className="flex" htmlFor="agree">
              <p>No estas registrado? </p>
              <Label
                className="text-cyan-600 hover:underline dark:text-cyan-500 hover:scale-105"
              >
                <a href="/register">Registrate AQUI</a>
              </Label>
            </Label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
