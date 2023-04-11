import { useState } from "react";

const useStatePersist = (localStorageKey, initialValue) => {
  const [state, setState] = useState(() => {
    const savedData = localStorage.getItem(localStorageKey);
    return savedData ? JSON.parse(savedData) : runIfFunction(initialValue);
  });

  const setStateAndSave = (updatedState) => {
    setState((state) => {
      const updatedStateResult = runIfFunction(updatedState, state);
      localStorage.setItem(localStorageKey, JSON.stringify(updatedStateResult));
      return updatedStateResult;
    });
  };
  return [state, setStateAndSave];
};
const runIfFunction = (value, ...rest) => {
  return typeof value === "function" ? value(...rest) : value;
};

export default useStatePersist;
