import React from "react";

function InputContainer({ inputVal, write, addToDo }) {
  return (
    <div className="input-container">
      <input type="text" value={inputVal} onChange={write} />
      <button onClick={addToDo}>+</button>
    </div>
  );
}

export default InputContainer;
