import useInput from "../hooks/useInput";

function FormAddPost({ onSubmit }) {
  const [input, handleInputChange, handleSubmit,error] = useInput(
    "",
    onSubmit,
    (input) =>
      input.length < 2 ? "must be at least 2 characters" : null
  );
  return (
    <div style={{ textAlign: "center" }}>
      <textarea
        value={input}
        className="form-control"
        onInput={handleInputChange}
        type="text"
        placeholder="What do you say?"
      />
      {error}
      <br />
      <button
        className="btn btn-dark"
        onClick={handleSubmit}
      >
        Add post
      </button>
    </div>
  );
}

export default FormAddPost;
