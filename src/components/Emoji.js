import React from 'react';

const emojiDictionary = {
    "😊": "Smiling",
    "😳": "disbelief",
    "😔": "sad",
    "🥡": "takeout box",
    "❤️": "love",
    "😑": "annoyance"
};

const emojis = Object.keys(emojiDictionary);

const Emoji = () => {
    return (
        <div className="App">
            <h1>inside out</h1>
            <input className='emoji-input' placeholder={"Search your emoji"} />
            {emojis.map((emoji) => (
                <span className='single-emoji' key={emoji}> {" "}
                {emoji}{" "}</span>
            ))}
        </div>
    );
}

export default Emoji;
