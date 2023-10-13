import { useState } from "react";

export const useChecked = (initialState) => {
  const [checked, setChecked] = useState(initialState);
  const handleClickCheckbox = ({ target }) => {
    setChecked({
      ...useChecked,
      [target.name]: !checked[target.name],
    });
  };
  return [checked, handleClickCheckbox];
};
