import { createContext, useContext, useState } from "react";

const Toggle = createContext();

export function ToggleComponent({ children }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Toggle.Provider value={{ open, setOpen }}>{children}</Toggle.Provider>
    </div>
  );
}

function ToggleButton({ children }) {
  const { open, setOpen } = useContext(Toggle);
  return <button onClick={(e) => setOpen(!open)}>{children}</button>;
}

function ToggleContent({ children }) {
  const { open } = useContext(Toggle);
  return <div>{open && children}</div>;
}

ToggleComponent.Button = ToggleButton;
ToggleComponent.Content = ToggleContent;
