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
  const [procedures, setProcedures] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await services.consultPatientProcedures(form);
        console.log(response);
        setProcedures(response);
      } catch (error) {
        console.log("No se pudieron obtener los procedimientos");
      } finally {
        setLoading(false);
      }
    };

    if (showModal) {
      fetchData();
    }
  }, [showModal]); // Ejecutar solo cuando showModal cambia

  const consultProcedures = (formData) => {
    setForm(formData);
    setShowModal(true);
  };

  const BodyModalComponent = () => {
    console.log(procedures);
    return (
      <div>
        <div>
          <h2 className="text-center font-bold">CITAS</h2>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => toPDF()}>Descargar PDF</button>

        </div>
        <div>
          {procedures.map((e) => {
            let detail = JSON.parse(e.detail);
            let data = {...detail}
            data.media = e.media;
            return (
              <div key={e.id} className="mb-14" ref={targetRef}>
                <div>
                  <h3>{`Fecha: ${e.appointment.date} Hora: ${e.appointment.time}`}</h3>
                  <h3>{`Doctor: ${e.appointment.doctor.Person.name} ${e.appointment.doctor.Person.lastName}`}</h3>
                  <h3>{`Especialidad: ${e.appointment.specialty.name}`}</h3>
                </div>
                <div className="border-2 border-[var(--primary)]">
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
    <div className="justify-center flex flex-col">
      <AppForm
        form={Forms.consultProcedures()}
        onSubmit={(e) => consultProcedures(e)}
        loading={loading}
      />
      <ModalComponent
        show={showModal}
        size="3xl"
        onClose={() => setShowModal(false)}
        header={`Historia Odontologica`}
        body={<BodyModalComponent />}
        footer={""}
      />
    </div>
  );
}

export default GetProcedures;
