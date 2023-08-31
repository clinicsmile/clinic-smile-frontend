import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppForm from "../../components/form/AppForm";
import { login, registerForm} from "../../data/form/FormFields";

function Cites() {
  let navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const toLogin = async (formData) => {
    formData = {
      username: "andres",
      password: "123456",
    };

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
    <div className="flex">
      <div className="mt-10 m-auto flex-1 justify-center	">
        <AppForm form={registerForm} onSubmit={(e) => toLogin(e)} loading={loading} />
      </div>
    </div>
  );
}

export default Cites;
