import { useForm } from "./useForm";

export function SignupForm() {
  const { values, handleChange, resetForm } = useForm({ name: "", email: "" });
  console.log(values);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={values.name} onChange={handleChange} />
      <input name="email" value={values.email} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
}
