const deactivateForm = (formName, shouldDeactivate) => {
  const form = document.querySelector(`.${formName}`);
  if (form) {
    if (shouldDeactivate) {
      form.classList.add(`${formName}--disabled`);
    }
    else {
      form.classList.remove(`${formName}--disabled`);
    }

    form.querySelectorAll('fieldset').forEach((field) => {
      field.disabled = shouldDeactivate;
    });

    form.querySelectorAll('select').forEach((field) => {
      field.disabled = shouldDeactivate;
    });
  }
};

export { deactivateForm };
