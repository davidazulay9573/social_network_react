
import { useState } from "react";
function FormAddPost({ onSubmit }) {
  const [input, setInput] = useState('');
  return (
    <div style={{ textAlign: "center" }}>
      <textarea
        value={input}
        className="form-control"
        onInput={(e) => {setInput(e.target.value)}}
        type="text"
        placeholder="What do you say?"
      />
     
      <br />
      <button
        className="btn btn-dark"
        onClick={() => {onSubmit(input) ; setInput('')}}
      >
        Add post
      </button>
    </div>
  );
}

export default FormAddPost;
