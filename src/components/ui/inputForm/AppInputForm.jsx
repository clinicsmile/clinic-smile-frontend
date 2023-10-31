import { Label, TextInput, FileInput } from "flowbite-react";

export default ({ label, input, value }) => {
  return (
    <div className="my-3">
      <div className="mb-2 block">
        <Label htmlFor={label.htmlFor} value={label.name} />
      </div>
      {input.type === "file" ? (
        <FileInput 
          helperText={label.name}
          id={input.id}
        />
      ) : (
        <TextInput
          defaultValue={value}
          id={input.id}
          placeholder={input.placeholder}
          required={input.required}
          type={input.type}
          pattern={input.pattern}
          title={input.title}
          disabled={input.disabled}
          readOnly={input.readOnly}
        />
      )}
    </div>
  );
};