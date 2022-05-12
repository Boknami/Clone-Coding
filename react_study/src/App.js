import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [Loading, setLoading] = useState(true);
  const [movies,setMovies] = useState([]);
  useEffect(() => {
    fetch(
      'https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year'
    )
    .then((response) => response.json())
    .then((json) => {
      setMovies(json.data.movies);
      setLoading(false);
    });
  }, [])

  console.log(movies);
  
  return(
    <div>
       <h1>영화 추천</h1>
       {Loading? <h1>로딩중...</h1> : null} 
    </div>
  );
}

export default App;

//map은 예전 값들을 불러와서 변형이 가능
//map의 첫 인자는 예전 값들
