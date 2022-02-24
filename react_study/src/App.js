import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) =>  {
    event.preventDefault();
    if(toDo ===""){
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");//초기화 
  }


  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          text="text" 
          placeholder="해야할 일을 작성하세요!">
        </input>

        <button>할 일 추가</button>
      </form>
      <hr />

      <ul>
        {toDos.map((String, index) => (
         <li key={index}>{String}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
