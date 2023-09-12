import React, { useState, useEffect } from "react";
import AppButton from "../ui/button/AppButton";

import AppInputForm from "../ui/inputForm/AppInputForm";

import AppSelectForm from "../ui/selectForm/AppSelectForm";
import { Label } from "flowbite-react";

function AppForm({ form, onSubmit, loading = false, loadedData = {} }) {
  const [formClassName, setFormClassName] = useState("");

  useEffect(() => {
    setFormClassName(
      `grid grid-cols-${form.fields.length > 2 ? "2" : "1"} gap-4`
    );

    if (loadedData) {
      form.fields.map((field) => {
        field.input.value = loadedData[field.input.name];
      });
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const target = e.target;
    let formData = {};
    form.fields.map((f) => {
      formData[f.input.name] = target[f.input.name].value;
    });
    onSubmit(formData);
  };

  const Form = () => (
    <>
      {form.fields.map((field, index) => (
        <AppInputForm
          value={field.input.value}
          key={"" + field.label + index}
          label={field.label}
          input={field.input}
        />
      ))}

      {form.select?.map((select, index) => (
        <div key={select.field.name + index}>
          <div>
            <Label htmlFor={select.label.htmlFor} value={select.label.name} />
          </div>
          <AppSelectForm
            key={select.field.name + index}
            title={select.field.name}
            items={select.field.items}
          />
        </div>
      ))}

      {form.buttons?.map((button, index) => (
        <AppButton
          key={button.title + index}
          title={button.title}
          type={button.type}
          submit={button.submit}
          loading={loading}
        />
      ))}
    </>
  );

  return (
    <form className={formClassName} onSubmit={handleSubmit}>
      <Form />
    </form>
  );
}

export { AppForm };
