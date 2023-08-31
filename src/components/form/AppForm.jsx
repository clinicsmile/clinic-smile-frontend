import React, { useState } from "react";
import AppButton from "../ui/button/AppButton";
import { formContentStyle, formInputStyle } from "./form-styles";

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

  const FormInput = ({ label, input }) => {
    return (
      <div className="w-1/3">
        <label className="flex mb-1" {...label}>
          {label.name}
        </label>
          <input {...input} className={formInputStyle} />
      </div>
    );
  };

  const Form = () => (
    <>
      {form.fields.map((field, index) => (
        <FormInput
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

  return (
    <form className={formContentStyle} onSubmit={handleSubmit} >
      <Form />
    </form>
  );
}
