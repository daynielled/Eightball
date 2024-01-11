import React, { useState } from 'react';
import './Eightball.css';


const Eightball = ({ answers }) => {
    const [message, setMessage] = useState("Think of a Question");
    const [color, setColor] = useState("black");
    const [counts, setCounts] = useState({ green: 0, goldenrod: 0, red: 0 })

    const handleClick = () => {
        const randomIndex = Math.floor(Math.random() * answers.length);
        const randomAnswer = answers[randomIndex];

        setMessage(randomAnswer.msg);
        setColor(randomAnswer.color);
        setCounts((prevCounts) => {
            const updateCounts = { ...prevCounts, [randomAnswer.color]: prevCounts[randomAnswer.color] + 1 };
            return updateCounts;
        });
    };

    const handleReset = () => {
        setMessage("Think of a question");
        setColor('black')
    };

    return (
        <div className='eight-ball-container'>
            <div
                onClick={handleClick}
                style={{ backgroundColor: color }}
                className='eight-ball'
            >
                <span className='eight-ball-text'> {message}</span>
            </div>
            <button onClick={handleReset} className='rest-button'>
                Reset
            </button>

            <div className='record-keeping'>
                <p>Green Count: {counts.green} </p>
                <p>Goldenrod Count: {counts.goldenrod} </p>
                <p>Red Count: {counts.red} </p>
            </div>


        </div>
    );
};

export default Eightball;