import React, { useState, useEffect } from "react";
import AppButton from "../ui/button/AppButton";

import AppInputForm from "../ui/inputForm/AppInputForm";

import AppSelectForm from "../ui/selectForm/AppSelectForm";

import AppTextAreaForm from "../ui/textAreaForm/AppTextAreaForm";

function AppForm({ form, onSubmit, loading = false, loadedData = {} }) {
  const [formClassName, setFormClassName] = useState("");

  useEffect(() => {
    setFormClassName(
      `grid grid-cols-${form.fields.length > 2 ? "2" : "1"} gap-4`
    );

    if (loadedData) {
      form.fields.map((field) => {
        field.input
          ? (field.input.value = loadedData[field.input.name])
          : field.select
          ? (field.select.value = loadedData[field.select.name])
          : (field.textarea.value = loadedData[field.textarea.name]);
        // field.input.value = loadedData[field.input.name];
      });
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const target = e.target;
    console.log(target);
    let formData = {};
    form.fields.forEach((f) => {
      f.input
        ? (formData[f.input.name] = target[f.input.name].value)
        : f.select
        ? (formData[f.select.name] = target[f.select.name].value)
        : (formData[f.textarea.name] = target[f.textarea.name].value);

      //console.log(f);
      //formData[f.input.name] = target[f.input.name].value;
    });
    onSubmit(formData);
  };

  const Form = () => (
    <>
      {form.fields.map((field, index) =>
        field.input ? (
          <AppInputForm
            value={field.input.value}
            key={"" + field.label + index}
            label={field.label}
            input={field.input}
          />
        ) : field.select ? (
          <AppSelectForm
            key={field.select.name + index}
            title={field.select.name}
            items={field.select.items}
            label={field.label}
            select={field.select}
          />
        ) : (
          <AppTextAreaForm
            key={field.textarea.name + index}
            label={field.label}
            textarea={field.textarea}
          />
        )
      )}

      {/* {form.select?.map((select, index) => (
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
      ))} */}

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
    <form className={`${formClassName} p-6`} onSubmit={handleSubmit}>
      <Form />
    </form>
  );
}

export { AppForm };
