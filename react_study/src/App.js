import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();

    if(toDo === "") {
      return;
    }
    //react는 함수를 보낼 때 첫 인자로 현재 상태를 보낸다!
    setToDos(currentArray => [toDo, ...currentArray]);
    setToDo("");
  }
  console.log(toDos);
  
  return(
  <div>
    <h1>My To Dos [{toDos.length}]</h1>
    <form onSubmit={onSubmit}>
    <input
      onChange={onChange}
      value={toDo}
      type="text"
      placeholder="Write your to do..."
    >
    </input>

    <button>Add To Do</button>
    </form>

    <hr />

    <ul>
      {toDos.map((item, index) => (
      <li key = {index}>{item}</li>
      ))}
    </ul>
  </div>
  );
}

export default App;

//map은 예전 값들을 불러와서 변형이 가능
//map의 첫 인자는 예전 값들
