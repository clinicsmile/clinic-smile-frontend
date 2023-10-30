import { doctorSelect, statusSelect } from "../../../data/form/appointments";

export const extraInputs = (rolId) => {
  
  let extra = { ...doctorSelect, ...statusSelect };
  return rolId === 1 && extra;
};
