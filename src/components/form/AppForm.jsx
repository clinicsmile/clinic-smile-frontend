import React, { useState } from "react";
import AppButton from "../ui/button/AppButton";

import AppInputForm from "../ui/inputForm/AppInputForm";

function AppForm({ form, onSubmit, loading = false }) {
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
  let clase="";
  if(form.fields.length > 2){
    clase="grid grid-cols-2 gap-4";
  }else{
    clase="grid grid-cols-1 gap-4";
  }
  return (
      <form className={clase} onSubmit={handleSubmit}>
        <Form />
      </form>
  );
}

export {AppForm}
