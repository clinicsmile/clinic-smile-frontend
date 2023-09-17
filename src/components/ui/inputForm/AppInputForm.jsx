import { Label, TextInput } from "flowbite-react";

export default ({ label, input, value }) => {
  return (
    <div>
      <div className="mb-2 block">
        <Label htmlFor={label.htmlFor} value={label.name} />
      </div>
      <TextInput
        defaultValue={value}
        id={input.id}
        placeholder={input.placeholder}
        required={input.required}
        type={input.type}
        pattern={input.pattern}
        title={input.title}
        disabled={input.disabled}
      />
    </div>
  );
};
