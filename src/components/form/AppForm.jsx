import React, { useState, useEffect } from "react";
import AppButton from "../ui/button/AppButton";

import AppInputForm from "../ui/inputForm/AppInputForm";

import AppSelectForm from "../ui/selectForm/AppSelectForm";

import AppTextAreaForm from "../ui/textAreaForm/AppTextAreaForm";

import AppDatePickerForm from "../ui/datePicker/AppDatePickerForm";

import Checkbox from "../ui/checkbox/Checkbox";

function AppForm({
  form,
  onSubmit,
  loading = false,
  loadedData = {},
  onSelectChange,
}) {
  console.log(form);
  const [formClassName, setFormClassName] = useState("");
  useEffect(() => {
    // setFormClassName(
    //   `grid grid-cols-${form.fields.length > 2 ? "2" : "1"} gap-4`
    // );
    if (loadedData) {
      console.log(loadedData);
      form.fields.map((field) => {
        field.input
          ? (field.input.value = loadedData[field.input.name])
          : field.select
          ? (field.select.value = loadedData[field.select.name])
          : field.textarea
          ? (field.textarea.value = loadedData[field.textarea.name])
          : field.date
          ? (field.date.value = loadedData[field.date.name])
          : (field.checkbox.checked = loadedData[field.checkbox.name]);
      });
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const target = e.target;
    let formData = {};
    form.fields.forEach((f) => {
      f.input
        ? (formData[f.input.name] = target[f.input.name].value)
        : f.select
        ? (formData[f.select.name] = target[f.select.name].value)
        : f.textarea
        ? (formData[f.textarea.name] = target[f.textarea.name].value)
        : f.date
        ? (formData[f.date.name] = target[f.date.name].value)
        : f.checkbox.items.forEach((e) => {
            formData[e.check.name] = target[e.check.name].checked;
          });
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
            value={field.select.value}
            onChange={onSelectChange}
          />
        ) : field.textarea ? (
          <AppTextAreaForm
            key={field.textarea.name + index}
            label={field.label}
            textarea={field.textarea}
            value={field.textarea.value}
          />
        ) : field.date ? (
          <AppDatePickerForm
            type={field.date.type}
            key={field.date.name + index}
            label={field.label}
            date={field.date}
            value={field.date.value}
            min={!!field.date?.min}
            max={!!field.date?.max}
            minValue={field.date?.minValue}
            maxValue={field.date?.maxValue}
          />
        ) : (
          <Checkbox label={field.label} items={field.checkbox.items}></Checkbox>
        )
      )}

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
