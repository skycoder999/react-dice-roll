import React, { useState, useEffect } from 'react';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faDiceOne } from '@fortawesome/free-solid-svg-icons';
import './style.css';

const DieComp = (props) => {
    const [animation, setAnimation] = useState("")

    useEffect(() => {
        setAnimation("swirl-in-fwd");
    }, [props.face])

    return (
        <>
            <i className={`${animation} die fas fa-dice-${props.face}`}> </i><br />
            {
                (props.face === "six") ? (<div className="blinking">"Hurray! You are a Winner!"</div>) : ("Try Again! Better Luck Next Time")
            }
            < br />
            < br />
            {/* UnComment the below one if you want to use installed fontawesome Icon */}
            {/*  <FontAwesomeIcon icon={faDiceOne} /> */}

        </>
    )
}

export default DieComp;
