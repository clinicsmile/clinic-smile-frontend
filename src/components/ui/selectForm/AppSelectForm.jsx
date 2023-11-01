/* eslint-disable react/prop-types */
import { Select, Label } from "flowbite-react";
export default ({ items, label, select, value, onChange }) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };
  console.log(items);
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
        key={select.id}
        
      >
        {items.map((e) => (
          <option  value={e.option.value}>
            {e.option.name}
          </option>
        ))}
      </Select>
    </div>
  );
};
