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
        step: Math.max(1, state.step - 1),
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

function useModal() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return {
    step: state.step,
    openModal: () => dispatch({ type: "open-modal" }),
    closeModal: () => dispatch({ type: "close-modal" }),
    nextStep: () => dispatch({ type: "next-step" }),
    prevStep: () => dispatch({ type: "back" }),
  };
}

export function Modal() {
  const { step, openModal, closeModal, nextStep, prevStep } = useModal();
  return (
    <div>
      <p>{step}</p>
      <button onClick={openModal}>Open</button>
      <button onClick={closeModal}>Close</button>
      <button onClick={nextStep}>Next</button>
      <button onClick={prevStep}>Back</button>
    </div>
  );
}
