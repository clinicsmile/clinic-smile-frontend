/* eslint-disable react/prop-types */
import { Select, Label } from "flowbite-react";

// eslint-disable-next-line react-refresh/only-export-components, react/display-name
export default ({ items, label, select }) => {
  return (
    <div>
      <div className="mb-2 block">
        <Label htmlFor={label.htmlFor} value={label.name} />
      </div>
      <Select id={select.id}>
        {items.map((e) => (
          <option key={e.option.name} value={e.option.value}>{e.option.name}</option>
        ))}
      </Select>
    </div>
  );
};
