import { ToggleComponent } from "./ToggleComponent/ToggleComponent";

function App() {
  return (
    <>
      <ToggleComponent>
        <ToggleComponent.Button>Click me</ToggleComponent.Button>
        <ToggleComponent.Content>Content</ToggleComponent.Content>
      </ToggleComponent>
    </>
  );
}

export default App;
