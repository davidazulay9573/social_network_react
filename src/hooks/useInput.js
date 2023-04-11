import { useState } from "react";

function useInput(initialValues, onSubmit) {
  const [inputs, setInputs] = useState(initialValues);
  const [displayInput, setDisplayInput] = useState("");


  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "file" ? URL.createObjectURL( target.files[0]): target.value;
    const name = target.name;
     
       setInputs({
         ...inputs,
         [name]:value,
       });
    setDisplayInput("none");

  };

  const handleSubmit = () => {
  
    onSubmit(inputs);
    setInputs(initialValues);
    setDisplayInput("");

  };
  return [handleInputChange, handleSubmit, inputs,displayInput];
}

export default useInput;
