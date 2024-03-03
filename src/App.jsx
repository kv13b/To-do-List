import { useState } from "react";
import "./App.css";
import InputContainer from "./components/InputContainer";
import TodoContainer from "./components/TodoContainer";
function App() {
  const [inputVal, setInputVal] = useState("");
  const [todos, SetTodo] = useState([]);
  function write(e) {
    setInputVal(e.target.value);
  }

  function addToDo() {
    if (inputVal != "") {
      SetTodo((prev) => [...prev, inputVal]);
      setInputVal("");
    }
  }

  function delToDo(todoIndex) {
    SetTodo((prevTodos) =>
      prevTodos.filter((prevTodos, prevTodosIndex) => {
        return prevTodosIndex != todoIndex;
      })
    );
  }
  return (
    <main>
      <h1>To-Do list</h1>
      <InputContainer inputVal={inputVal} write={write} addToDo={addToDo} />
      <TodoContainer todos={todos} delToDo={delToDo} />
    </main>
  );
}

export default App;
