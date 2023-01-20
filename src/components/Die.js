import React from "react";
import '../styles/die.css'

const Die = ({dieData, lockTheDie}) => {

    let imgSrc = `https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-${dieData.value}.svg`

    return (
        
        <img
            className={(dieData.locked) ? "die--locked" : "die"}
            id={dieData.id}
            src={imgSrc}
            alt={dieData.value}
            onClick={() => lockTheDie(dieData.id)}
        />
    )
}

export default Die;