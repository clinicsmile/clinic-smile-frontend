import { validate } from "../../middlewares/validateLogin";
import GetProcedures from "../../components/procedures/Procedures";
function MedicalRecords() {
  if (validate) {
    return (
      <div className="h-screen flex">
        <div className="w-5/6 h-5/6 bg-white rounded-3xl text-center m-auto shadow-black shadow-2xl flex">
          <div className="m-auto p-6">
            <div className="h-1/6 m-auto justify-center items-center flex">
              <h1 className="font-serif text-4xl text-center grid-cols-1 border-b-2 border-b-[--primary] pb-3">
                Consulta de historias clínicas
              </h1>
            </div>
            <div className="m-auto">
              <GetProcedures />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    location.href = "/login";
  }
}

export default MedicalRecords;
