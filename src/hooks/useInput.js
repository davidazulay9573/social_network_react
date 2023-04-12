import { useState } from "react";

function useInput(initialValues, onSubmit = () => {}, validation = () => {}) {
  const [inputs, setInputs] = useState(initialValues);
  const [displayInput, setDisplayInput] = useState("");
  const [error, setError] = useState(null);
  const handleInputChange = (event) => {
    const target = event.target;
    const value =
      target.type === "file"
        ? URL.createObjectURL(target.files[0])
        : target.value;
    const name = target.name;

    setInputs({
      ...inputs,
      [name]: value,
    });
    setDisplayInput("none");
    setError(null);
  };

  const handleSubmit = () => {
    const validationResult = validation(inputs);

    if (validationResult) {
      setError(validationResult);
      return;
    }

    onSubmit(inputs);
    setInputs(initialValues);
    setDisplayInput("");
  };
  return [handleInputChange, handleSubmit, inputs, displayInput, error];
}

export default useInput;
