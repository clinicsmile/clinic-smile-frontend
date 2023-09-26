import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppForm } from "../../components/form/AppForm";
import { Forms } from "../../data/form/Forms";
import { services } from "../../services/services";

function Register() {
  let navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const toRegister = async (formData) => {
    setLoading(true);
    try {
      formData.rolId = "3";
      await services.register(formData);
      navigate("/login");
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
            <AppForm
              form={Forms.registerFormPatient()}
              onSubmit={(e) => toRegister(e)}
              loading={loading}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
