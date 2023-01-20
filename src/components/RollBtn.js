import React from "react";
import '../styles/rollBtn.css'

const RollBtn = (props) => {

    return (
        <button onClick={(e) => props.rollTheDice(e)}>ROLL</button>
    )
}

export default RollBtn;