import { formInputStyle } from "./AppInputFormStyle";
import { Label, TextInput } from "flowbite-react";

export default ({ label, input }) => {
    console.log(label);
  return (
    <>
      <div className="mb-2 block">
        <Label htmlFor={label.htmlFor} value={label.name} />
      </div>
      <TextInput
          id={input.id}
          placeholder={input.placeholder}
          required={input.required}
          type={input.type}
        />
    </>
  );
  /*return(
        <TextInput
          id={input.id}
          placeholder={input.placeholder}
          required={input.required}
          type={input.type}
        />
    )*/
  /*return (
    <div className="relative z-0 w-75 mb-6 group">
      <input {...input} className={formInputStyle} />
      <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" {...label}>
        {label.name}
      </label>
    </div>
  );*/
};
