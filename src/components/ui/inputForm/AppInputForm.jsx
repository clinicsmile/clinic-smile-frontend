import { Label, TextInput } from "flowbite-react";


export default ({ label, input }) => {
  return (
    <>
      <div>
        <div className="mb-2 block">
          <Label htmlFor={label.htmlFor} value={label.name} />
        </div>
        <TextInput
          id={input.id}
          placeholder={input.placeholder}
          required={input.required}
          type={input.type}
        />
      </div>
    </>
  );
};
