import React, { useEffect, useState } from 'react';
import './App.css';

import Game from "./interfaces/GameInterface";
import gameDefinitions from "./gameDefinitions";
import Bet from "./Bet/Bet.class"


type Draw = {
  game: Game,
  numbers: number[][]
}

const betTemplates: Bet[] = [
  new Bet([1, 2, 3, 4, 5, 6, 7], gameDefinitions[0]),
  new Bet([1, 10, 34, 4, 32, 6, 7], gameDefinitions[0]),
  new Bet([0, 1, 2, 4, 32, 6, 7], gameDefinitions[0]),
  new Bet([1, 10, 34, 4, 7], gameDefinitions[1]),
]


function App() {
  const [bets, setBets] = useState<Bet[]>([]);

  const [newBet, setNewBet] = useState<string>("");

  const takeBet = () => {
    if (newBet !== "")
    setBets(
      [...bets, new Bet(newBet, gameDefinitions[0])]
    )
  }



  const drawnNumbersSkandi:Draw = {
    game: gameDefinitions[0],
    numbers: [
        [12, 32, 1, 33, 16, 26, 27],
        [10, 21, 3, 14, 4, 6, 17]
    ]
}


  bets.forEach(bet => { 

    if(!bet.validate()) return false;

    bet.checkWin(drawnNumbersSkandi);


  });

  return (
    <div className="App">
      <input type="text" value={newBet} onChange={(e) => setNewBet(e.target.value)}/>
      <button onClick={takeBet}>Küldés</button>

      <h1>Drawn numbers:</h1>
      {
        drawnNumbersSkandi.numbers.map((numList, i) => <p key={i}>{numList.join(", ")}</p>)
      }
      <hr />
      <h1>Bets:</h1>
      {
        bets.map((bet, i) => <div key={i}>
          <p>{bet.numbers.join(", ")} ({bet.game.name})</p>
          {
            bet.won && bet.result.map((x, i) => <p key={i}>{x.join(", ")}</p>)
          }
          
          <hr />
        </div>)
      }
    </div>
  );
}

export default App;
