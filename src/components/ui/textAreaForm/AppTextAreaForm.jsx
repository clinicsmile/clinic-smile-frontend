/* eslint-disable react/prop-types */
import { Textarea, Label } from "flowbite-react";

// eslint-disable-next-line react-refresh/only-export-components, react/display-name
export default ({ label, textarea }) => {
  return (
    <div>
      <div className="mb-2 block">
        <Label htmlFor={label.htmlFor} value={label.name} />
      </div>
      <Textarea
        id={textarea.name}
        placeholder={textarea.placeholder}
        rows={4}
      />
    </div>
  );
};
