import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppForm } from "../../components/form/AppForm";
import { createNoAuthForm } from "../../data/form/appointments";
import { createNoAuth } from "../../services/appointments";
import AppButton from "../../components/ui/button/AppButton";
import Swal from "sweetalert2";

function CreateAppoimentNoAuth() {
  let navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const createAppoinment = async (formData) => {
    setLoading(true);
    try {
      await createNoAuth(formData);
      await Swal.fire({
        title: "Cita creada correctamente",
        icon: "success",
        timer: 1500,
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
      <div className="m-auto md:w-4/5 lg:w-1/3 h-5/6 p-1 rounded-lg bg-white shadow-2xl columns-1">
        <div className="h-full">
          <div className="flex h-1/5 justify-center pb-3">
            <img src="./logo.svg" className="max-w-xs" />
          </div>
          <div className="h-4/5 overflow-y-scroll overflow-x-hidden flex flex-col items-center">
            <AppForm
              form={createNoAuthForm}
              onSubmit={(e) => createAppoinment(e)}
              loading={loading}
            />
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
