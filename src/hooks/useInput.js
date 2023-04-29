import { useState } from "react";

function useInput(initialValues, onSubmit = () => {}, validation = () => {}) {
  const [input, setInput] = useState(initialValues);
  const [displayInput, setDisplayInput] = useState("");
  const [error, setError] = useState(null);
 
  const handleInputChange = (event) => {
    if (typeof initialValues === "string") {
       setInput(event.target.value);
    }  
    if (typeof initialValues === "object") {
      const target = event.target;
      const value =
        target.type === "file"
          ? URL.createObjectURL(target.files[0])
          : target.value;
      const name = target.name;
      setInput({
        ...input,
        [name]: value,
      });
    }
  
    setDisplayInput("none");
    setError(null);
  };

  const handleSubmit = () => {
    const validationResult = validation(input);

    if (validationResult) {
      setError(validationResult);
      return;
    }

    onSubmit(input);
    setInput(initialValues);
    setDisplayInput("");
  };
  return [input, handleInputChange, handleSubmit, error, displayInput];
}

export default useInput;
