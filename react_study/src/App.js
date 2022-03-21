import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([])
  useEffect( () => {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then(response => response.json())
    .then(json => {
      setCoins(json);
      setLoading(false);
    });
  }, [])

  return(
    <div>
        <h1>The Coins!</h1>
        {loading ? <strong>Loading..</strong> : null }

        <ul>
          {coins.map((coin) => (
          <li>
            {coin.name} ({coin.sysbol}): ${coin.quotes.USD.price}
          </li>
          ))}
        </ul>
    </div>
  );
}

export default App;

//map은 예전 값들을 불러와서 변형이 가능
//map의 첫 인자는 예전 값들
