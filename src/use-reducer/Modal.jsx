import { useReducer } from "react";

const initialState = {
  open: false,
  step: 1,
};

function reducer(state, action) {
  switch (action.type) {
    case "open-modal":
      return {
        ...state,
        open: true,
      };
    case "next-step":
      return {
        ...state,
        step: state.step + 1,
      };
    case "back":
      return {
        ...state,
        step: state.step - 1 < 1 ? 1 : state.step - 1,
      };
    case "close-modal":
      return {
        ...state,
        open: false,
      };
    default:
      return state;
  }
}

export function Modal() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <button onClick={(e) => dispatch({ type: "open-modal" })}>Open</button>
      <button onClick={(e) => dispatch({ type: "close-modal" })}>Close</button>
      <button onClick={(e) => dispatch({ type: "next-step" })}>Next</button>
      <button onClick={(e) => dispatch({ type: "back" })}>Back</button>
    </div>
  );
}
