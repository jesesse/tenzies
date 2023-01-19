import React from "react";
import '../styles/dice.css'

const Dice = ({ dices, rollTheDice }) => {

    let everyDice = dices.map(dice => {
      let source = `https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-${dice.value}.svg`
        return (
            <img
                className="dice"
                key={dice.id}
                id={dice.id}
                src={source}
                alt={dice.value}
                onClick={() => rollTheDice(dice.id)}
                />
        )
    })

    return (
        <div className="dice--container">
            {everyDice}
        </div>
    )
}

export default Dice;