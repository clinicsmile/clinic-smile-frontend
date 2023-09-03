import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppForm from "../../components/form/AppForm";
import {registerForm} from "../../data/form/FormFields";

function Register() {
  let navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const toLogin = async (formData) => {
    // formData = {
    //   username: "andres",
    //   password: "123456",
    // };

    setLoading(true);
    try {
      // await signIn(formData);
      // navigate("/cites");
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
            <img src="/src/assets/logo.svg" />
          </div>
          <div className="h-1/2 justify-center">
          <AppForm form={registerForm} onSubmit={(e) => toLogin(e)} loading={loading} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
