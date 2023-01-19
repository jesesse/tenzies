import './styles/main.css'
import React from "react";
import Dice from "./components/Dice";

const App = () => {

  const [dices, setDices] = React.useState([])

  const rollTheDice = (id) => {
    setDices(previousDices => {
      let newDices = previousDices.map(dice => {
        if (dice.id === id) dice.value = getRandomValue();
        return dice;
      })
      return newDices;
    })
  }

  const getRandomValue = () => {
    let randomValue = Math.floor(Math.random() * 6) + 1;
    if (randomValue === 1) randomValue = "one"
    if (randomValue === 2) randomValue = "two"
    if (randomValue === 3) randomValue = "three"
    if (randomValue === 4) randomValue = "four"
    if (randomValue === 5) randomValue = "five"
    if (randomValue === 6) randomValue = "six"
    return randomValue;
  }

  React.useEffect(() => {
    setDices(() => {
      let diceList = [];
      for (let i = 0; i < 10; i++) {
        let newDice = { id: i, value: getRandomValue() }
        diceList.push(newDice)
      }
      return diceList
    })
  }, [])



  return (
    <main>
      <Dice dices={dices} rollTheDice={rollTheDice}

      />
    </main>
  )
}

export default App;
