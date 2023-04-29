
import useInput from "../hooks/useInput";
export function Search({ onSubmit }) {
  const [input,handleInputChange ] = useInput('');
  return (
      <div style={{ display: "flex", flex: "4" }}>
        <br />
        <input
          className="form-control w-25 "
          type="search"
          placeholder="Search"
          value={input}
          onInput={handleInputChange}
          onKeyUp={() => onSubmit(input)}
        />
        <button className="btn btn-light" onClick={() => onSubmit(input)}>
          <i className="W-20 bi bi-search"></i>
        </button>
      </div>
  );
}

