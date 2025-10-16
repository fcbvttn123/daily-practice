import { useState } from "react";

export function useForm(props) {
  const [formData, setFormData] = useState(props);

  function handleChange(e) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function resetForm() {}

  return {
    values: formData,
    handleChange,
    resetForm,
  };
}
