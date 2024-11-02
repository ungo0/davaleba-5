import React, { useState, useEffect } from 'react';
import './HiddenWord.css';

const HiddenWord = () => {
    const hiddenWord = "reschool";
    const [typedWord, setTypedWord] = useState("");
    const [isWordFound, setIsWordFound] = useState(false);

    useEffect(() => {
        const handleKeyPress = (event) => {
            setTypedWord((prevTypedWord) => prevTypedWord + event.key);

            if ((typedWord + event.key).includes(hiddenWord)) {
                setIsWordFound(true);
            }
        };

        const handleMouseMove = (event) => {
            console.log(`Mouse Coordinates: X: ${event.clientX}, Y: ${event.clientY}`);
        };

        window.addEventListener("keypress", handleKeyPress);
        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("keypress", handleKeyPress);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [typedWord]);

    useEffect(() => {
        if (typedWord.length > hiddenWord.length) {
            setTypedWord(typedWord.slice(-hiddenWord.length));
        }
    }, [typedWord]);

    return (
        <div className="hidden-container">
            <h1>Guess the word!</h1>
            <p className="hidden-word">
                Hidden Word: {isWordFound ? hiddenWord : "*****"}
            </p>
            <p className="typed-word">Typed Word: {typedWord}</p>
        </div>
    );
};

export default HiddenWord;