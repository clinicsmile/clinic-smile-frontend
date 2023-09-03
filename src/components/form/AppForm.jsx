import React, { useState } from "react";
import AppButton from "../ui/button/AppButton";

import AppInputForm from "../ui/inputForm/AppInputForm";

export default function Form({ form, onSubmit, loading = false }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const target = e.target;
    let formData = {};
    form.fields.map((f) => {
      formData[f.input.name] = target[f.input.name].value;
    });
    console.log(formData);
    onSubmit(formData);
  };

  const Form = () => (
    <>
      {form.fields.map((field, index) => (
        <AppInputForm
          key={"" + field.label + index}
          label={field.label}
          input={field.input}
        />
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
  let columnas=0;
  if(form.fields.length > 2){
    columnas="2";
  }else{
    columnas="1";
  }
  return (
      <form className={`grid grid-cols-${columnas} gap-4`} onSubmit={handleSubmit}>
        <Form />
      </form>
  );
}
