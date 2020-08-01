import { useState } from 'react';

export default function useForm(initialValues) {
  const [values, setValue] = useState(initialValues);

  const onChange = (event) => {
    setValue({
      ...values,
      [event.target.getAttribute('name')]: event.target.value,
    });
  };

  const clearForm = () => {
    setValue(initialValues);
  };

  return {
    clearForm,
    onChange,
    values,
  };
}
