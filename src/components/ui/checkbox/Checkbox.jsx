import { Checkbox, Label } from "flowbite-react";
import { useChecked } from "../../../hooks/useChecked";

export default ({ label, items }) => {
  const initialState = {
    "SI-consulta": false,
    "NO-consulta": false,
    "SI-Medicamento": false,
    "NO-Medicamento": false,
    "SI-resultados": false,
    "NO-resultados": false,
    "Suave-dolor": false,
    "Moderado-dolor": false,
    "Intenso-dolor": false,
    "Temporario-dolor": false,
    "Intermitente-dolor": false,
    "Continuo-dolor": false,
    "Espontáneo-dolor": false,
    "Provocado-dolor": false,
    "AlFrio-dolor": false,
    "AlCalor-dolor": false,
    "Localizado-dolor": false,
    "Irradiado-dolor": false,
    "SI-golpe": false,
    "NO-golpe": false,
    "SI-fractura": false,
    "NO-fractura": false,
    "SI-hablar": false,
    "NO-hablar": false,
    "SI-masticar": false,
    "NO-masticar": false,
    "SI-boca": false,
    "NO-boca": false,
    "SI-alimentos": false,
    "NO-alimentos": false,
    "Lengua-labios": false,
    "Paladar-labios": false,
    "PisoDeBoca-labios": false,
    "carrillos-labios": false,
    "rebordes-labios": false,
    "trigono-labios": false,
    "retromolar-labios": false,
    "Manchas-lesiones": false,
    "Abultamiento-lesiones": false,
    "Ulceraciones-lesiones": false,
    "Ampollas-lesiones": false,
    "SI-sangreEn": false,
    "NO-sangreEn": false,
    "SI-pusBoca": false,
    "NO-pusBoca": false,
    "SI-movilidadDientes": false,
    "NO-movilidadDientes": false,
    "SI-altosDientes": false,
    "NO-altosDientes": false,
    "SI-caraHinchada": false,
    "NO-caraHinchada": false,
    "SI-caraHinchadaPuesto": false,
    "NO-caraHinchadaPuesto": false,
    "SI-placa": false,
    "NO-placa": false,
    "MuyBueno-higiene": false,
    "Bueno-higiene": false,
    "Deficiente-higiene": false,
    "Malo-higiene": false,
    "SI-PlanTratamiento": false,
    "NO-PlanTratamiento": false,
  };
  const [checked, handleClickCheckbox] = useChecked(initialState);
  return (
    <div>
      <div className="my-3">
        <Label htmlFor={label.htmlFor} value={label.name} />
      </div>
      <div
        className={`${items.length < 4 ? "flex" : "grid grid-cols-2 gap-2"}`}
      >
        {items.map((e) => (
          <div className="grid grid-cols-2 gap-4 mx-auto text-center">
            <Label
              htmlFor={e.label.htmlFor}
              value={e.label.name}
              className="tex-center"
            />
            <Checkbox
              id={`${e.check.id}`}
              name={`${e.check.name}`}
              checked={e.check.checked}
              onChange={handleClickCheckbox}
              readOnly={e.check.readOnly}
              disabled={e.check.disabled}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
