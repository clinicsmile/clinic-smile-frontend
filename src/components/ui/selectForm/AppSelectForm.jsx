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
        defaultValue={value}
        disabled={select.disabled}
        onChange={select.onChangeAction ? handleChange : undefined}
      >
        {items.map((e) => (
          <option key={e.option.name} value={e.option.value}>
            {e.option.name}
          </option>
        ))}
      </Select>
    </div>
  );
};
