import React, { useState } from 'react';

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
    const [emoji, setEmoji] = useState("");
    const [meaning, setMeaning] = useState("translation will appear here..");

    const handleEmojiClick = (emoji) => {
        setMeaning(emojiDictionary[emoji]);
    };

    const handleInputChange = (event) => {
        const inputEmoji = event.target.value;
        setEmoji(inputEmoji);

        inputEmoji in emojiDictionary
            ? setMeaning(emojiDictionary[inputEmoji])
            : setMeaning("Emoji not found!")
    };

    return (
        <div className="App">
            <h1>inside out</h1>
            <input
                className='emoji-input'
                placeholder={"Search your emoji"}
                onChange={handleInputChange}
                value={emoji}
            />
            <h2> {emoji} </h2>
            <h3> {meaning} </h3>
            {emojis.map((emoji) => (
                <span className='single-emoji' key={emoji} onClick={() => handleEmojiClick(emoji)}> {" "}
                    {emoji}{" "}</span>
            ))}
        </div>
    );
}

export default Emoji;
