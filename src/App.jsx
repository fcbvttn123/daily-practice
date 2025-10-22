import { ToggleComponent } from "./ToggleComponent/ToggleComponent";
import { SignupForm } from "./CustomHooks/SignupForm";
import { useFetch } from "./CustomHooks/useFetch";

function App() {
  const { data, error, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  data && console.log(data);
  return (
    <>
      <SignupForm />
    </>
  );
}

export default App;
