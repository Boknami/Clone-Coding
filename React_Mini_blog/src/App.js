import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  let [Title1, Title_Change1] = useState(['React 문법', 'UseState란?', '[변수, 변경함수] = useState']);
  let [Good, CountGood] = useState(0);
 
  function Change_Title(){
    var newArray = [...Title1];
    newArray[0] = "JS문법";

    Title_Change1(
      newArray
    );
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div
        link href = "..index.html"
        style={{color:'white', fontSize : '20px'}}>
          개발 Blog
        </div>
      </div>

      <Modal />
      
      <div className='list'>
        <h3>{Title1[0]} <span onClick={() => {CountGood(Good + 1)}}>👍</span>{Good}</h3>
        <p>22년 2월 18일 발행</p>
        <hr />
      </div>

      <div className='list'>
        <h3>{Title1[1]}</h3>
        <p>22년 2월 18일 발행</p>
        <hr />
      </div>

      <div className='list'>
        <h3>{Title1[2]}</h3>
        <p>22년 2월 18일 발행</p>
        <hr />
      </div>

    </div>
  );
}

function Modal(){
  return(
    <div className='modal'>
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
  )
}

export default App;
