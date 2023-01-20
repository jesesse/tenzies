import React from "react";
import Die from "./Die";
import RollBtn from './RollBtn';
import '../styles/gameboard.css'

const Gameboard = () => {

    const [dice, setDice] = React.useState(createNewDice())

    function createNewDice(){
        let diceList = [];
        for (let i = 0; i < 10; i++) {
            let newDie = {
                id: i,
                value: getRandomValue(),
                locked: false
            }
            diceList.push(newDie)
        }
        return diceList
    }

    function rollTheDice(){
        setDice(previousDice => {
            let newDice = previousDice.map(die => {
                if (!die.locked) die.value = getRandomValue()
                return die;
            })
            return newDice;
        })
    }

    function lockTheDie(id){
        setDice(previousDice => {
            let newDice = previousDice.map(die => {
                if (die.id === id) {
                    die = {
                        ...die,
                        locked: !die.locked
                    }
                }
                return die;
            })
            return newDice;
        })
    }

    function getRandomValue(){
        let randomValue = Math.floor(Math.random() * 6) + 1;
        if (randomValue === 1) randomValue = "one"
        if (randomValue === 2) randomValue = "two"
        if (randomValue === 3) randomValue = "three"
        if (randomValue === 4) randomValue = "four"
        if (randomValue === 5) randomValue = "five"
        if (randomValue === 6) randomValue = "six"
        return randomValue;
    }

    const diceElements = dice.map((die) => {
        return (
            <Die
                key={die.id}
                dieData={die}
                lockTheDie={lockTheDie}>
            </Die>
        )
    })

    return (
        <div>
            <div className="gameboard">
                {diceElements}
            </div>
            <RollBtn rollTheDice={rollTheDice}/>
        </div>
    )
}

export default Gameboard;