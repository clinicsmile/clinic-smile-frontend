import { Textarea, Label } from "flowbite-react";


export default ({ label, textarea,value }) => {
  return (
    <div className="my-3">
      <div className="mb-2 block">
        <Label htmlFor={label.htmlFor} value={label.name} />
      </div>
      <Textarea
        id={textarea.name}
        placeholder={textarea.placeholder}
        rows={4}
        defaultValue={value}
        disabled={textarea.disabled}
        readOnly={textarea.readOnly}
      />
    </div>
  );
};
