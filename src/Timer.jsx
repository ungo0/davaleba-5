import React, { useState, useRef } from 'react';
import './Timer.css';

const Timer = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef(null);

    const startTimer = () => {
        if (!isRunning) {
            setIsRunning(true);
            intervalRef.current = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
        }
    };

    const pauseTimer = () => {
        if (isRunning) {
            clearInterval(intervalRef.current);
            setIsRunning(false);
        }
    };

    const resetTimer = () => {
        clearInterval(intervalRef.current);
        setIsRunning(false);
        setTime(0);
    };

    return (
        <div className="timer-container">
            <h2>time: {time} second</h2>
            <button onClick={startTimer}>start</button>
            <button onClick={pauseTimer}>{isRunning ? 'pause' : 'pause'}</button>
            <button onClick={resetTimer}>reset</button>
        </div>
    );
};

export default Timer;