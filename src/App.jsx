import { useState, useEffect } from "react";
import Header from "./components/header";
import Dice from "./components/dice";
import Roll from "./components/roll";
import "./App.css";
import { nanoid } from "nanoid";
import Confetti from 'react-confetti'

export default function App() {
  const [count, setCount] = useState(0);
  const [dice, setDice] = useState(allNewDice());
  const [tenzies, setTenzies] = useState(false);
  const id = nanoid();

  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    };
  }

  function allNewDice() {
    const nums = [];
    for (let i = 0; i < 10; i++) {
      nums.push(generateNewDie());
    }
    return nums;
  }

  function rollDice() {
    setDice((prevDice) => {
      return prevDice.map((die) => {
        return die.isHeld ? die : generateNewDie();
      });
    });
    setCount(count => count + 1);
  }

  function holdDice(id) {
    setDice((prevDice) => {
      return prevDice.map((die) => {
        if (die.id === id) {
          return { ...die, isHeld: !die.isHeld };
        } else return die;
      });
    });
  }

  function newGame() {
    setDice(allNewDice());
  }

  const diceElements = dice.map((die) => (
    <Dice
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      onHold={holdDice.bind(null, die.id)}
    />
  ));

  useEffect(() => {
    const allHeld = dice.every((die) => die.isHeld);
    const firstValue = dice[0].value;
    const allSameValue = dice.every(die => die.value === firstValue);
    if (allHeld && allSameValue) {
      setTenzies(true);
      console.log(`You won in ${count} rolls!`);
    } else setTenzies(false);
  }, [dice]);

  return (
    <div className="flex flex-col justify-center m-6 p-4 gap-8 rounded-md bg-slate-50">
      <Header />
      {tenzies && <Confetti />}
      <div className="grid grid-cols-5 gap-6 m-2 py-2 pl-12">
        {diceElements}
      </div>
      <Roll clickHandler={rollDice} newGame={newGame} tenzies={tenzies}/>
    </div>
  );
}
