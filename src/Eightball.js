import React, { useState} from 'react';
import './Eightball.css';


const Eightball = ({answers}) => {
    const [message, setMessage] = useState("Think of a Question");
    const [color, setColor] = useState("black");

    const handleClick = () => {
        const randomIndex = Math.floor(Math.random() * answers.length);
        const randomAnswer = answers[randomIndex];

        setMessage(randomAnswer.msg);
        setColor(randomAnswer.color);
    };

    return (
        <div
        className='eight-ball-container' 
        onClick={handleClick}
        style={{ backgroundColor: color}}
        >
            <span className='eight-ball-text'> {message}</span>

        </div>
    );
};

export default Eightball;