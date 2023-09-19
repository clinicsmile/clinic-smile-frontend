/* eslint-disable react/prop-types */
import { Select, Label } from "flowbite-react";
export default ({ items, label, select, value, onChange }) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div>
      <div className="mb-2 block">
        <Label htmlFor={label.htmlFor} value={label.name} />
      </div>
      <Select
        id={select.id}
        disabled={select.disabled}
        onChange={select.onChangeAction ? handleChange : undefined}
      >
        <option key={""} value={null}>
          selecciona una opción
        </option>
        {items.map((e) => (
          <option key={e.option.name} value={e.option.value}>
            {e.option.name}
          </option>
        ))}
      </Select>
    </div>
  );
};
