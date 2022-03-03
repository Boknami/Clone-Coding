import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();

    if (toDo === "")
    {
      return;
    }
    setToDo("");
  };

  return(
    <div>
      <form onSubmit={onSubmit}>
        <input
          onChange = {onChange}
          value={toDo}
          type="text"
          placeholder="여기 작성하세요!"
        />

        <button>할 일 추가</button>
      </form>
    </div>
  );
}

export default App;
