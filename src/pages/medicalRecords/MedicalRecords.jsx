import { validate } from "../../middlewares/validateLogin";
import GetProcedures from "../../components/procedures/Procedures";
function MedicalRecords() {
  if (validate) {
    return (
      <div className="flex w-sceen h-screen items-center">
        <div className="w-full h-4/5 m-6 bg-white rounded-3xl">
          <div className="h-1/6 m-auto justify-center items-center flex">
            <span className="text-4xl">Consulta de historias clinicas</span>
          </div>
          <div className="w-1/2 mx-auto">
            <GetProcedures />
          </div>
        </div>
      </div>
    );
  } else {
    location.href = "/login";
  }
}

export default MedicalRecords;
