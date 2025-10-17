import { useForm } from "./useForm";

export function SignupForm() {
  const { values, handleChange, resetForm } = useForm({
    name: "",
    email: "",
    age: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={values.name} onChange={handleChange} />
      <input name="email" value={values.email} onChange={handleChange} />
      <input name="age" value={values.age} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
}
