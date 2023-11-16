import { useEffect, useState } from "react";
import { AppForm } from "../../components/form/AppForm";
import { Forms } from "../../data/form/Forms";
import { services } from "../../services/services";
import ModalComponent from "../modal/Modal";
import Swal from "sweetalert2";
import { usePDF } from "react-to-pdf";

function GetProcedures() {
  const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });

  const [loading, setLoading] = useState(false);
  const [procedures, setProcedures] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({});
  const [logo, setLogo] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       setLoading(true);
  //       const response = await services.consultPatientProcedures(form);
  //       console.log(response);
  //       setProcedures(response);
  //     } catch (error) {
  //       console.log("No se pudieron obtener los procedimientos");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //     fetchData();

  // }, [showModal]); // Ejecutar solo cuando showModal cambia

  // const consultProcedures = (formData) => {
  //   setForm(formData);
  //   console.log(formData);
  //  // setShowModal(true);
  // };

  useEffect(() => {
    const brand = JSON.parse(window.localStorage.getItem("brand"));
    setLogo(brand.logo);
  }, []);

  const consultProcedures = async (formData) => {
    setForm(formData);
    try {
      setLoading(true);
      const response = await services.consultPatientProcedures(formData);
      console.log(response);
      if (response.error) {
        Swal.fire({
          position: "center",
          icon: "error",
          title: response.error,
          text: "Por favor intentelo nuevamente",
        });
        return;
      }
      setProcedures(response);
      setShowModal(!showModal);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const BodyModalComponent = () => {
    return (
      <div className="w-full flex flex-col items-center justify-center">
        <div>
          <button
            className="bg-blue-500 hover:bg-blue-700 mb-6 mt-6 text-white font-bold py-2 px-4 rounded"
            onClick={() => toPDF()}
          >
            Descargar PDF
          </button>
        </div>
        <div
          ref={targetRef}
          className="w-full flex flex-col items-center justify-center"
        >
          <div className="w-full h-[150px] mb-6 flex justify-between border-4 items-center ">
            <div className=" flex border-r-4 pr-4 h-full items-center justify-center">
              <img
                src={logo || '/src/assets/ClinicSmile.png'}
                className="w-[150px]"
              ></img>
            </div>

            <div className="flex flex-col ">
              <span className="text-center">Historia clínica paciente</span>
              <span className="text-center">{form.document}</span>
            </div>

            <div className="flex items-center justify-center border-l-4 px-4 h-full">
              <span className="text-center self-center">
                {new Intl.DateTimeFormat("es").format(Date.now())}
              </span>
            </div>
          </div>

          {procedures &&
            procedures.map((e) => {
              let detail = JSON.parse(e.detail);
              let data = { ...detail };
              data.media = e.media;
              return (
                <div
                  key={e.id}
                  className="w-full mb-14 items-center justify-center"
                >
                  <div className="flex flex-col items-center justify-center">
                    <h3>{`Fecha: ${e.appointment.date} Hora: ${e.appointment.time}`}</h3>
                    <h3>{`Doctor: ${e.appointment.doctor.Person.name} ${e.appointment.doctor.Person.lastName}`}</h3>
                    <h3>{`Especialidad: ${e.appointment.specialty.name}`}</h3>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    {loading ? (
                      <p>Cargando datos...</p>
                    ) : (
                      e.detail && (
                        <AppForm
                          form={Forms.viewProcedures()}
                          loadedData={data}
                          loading={loading}
                        />
                      )
                    )}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    );
  };

  return (
    <div className="items-center justify-center">
      <AppForm
        form={Forms.consultProcedures()}
        onSubmit={(e) => consultProcedures(e)}
        loading={loading}
      />
      <ModalComponent
        show={showModal}
        size="6xl"
        onClose={() => setShowModal(false)}
        header={""}
        body={<BodyModalComponent />}
        footer={""}
      />
    </div>
  );
}

export default GetProcedures;
