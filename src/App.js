import "./styles.css";
import React, { useState } from "react";

var emojiDoctionary = {
  "๐": "Grinning face",
  "๐คฃ": "Rolling on the Floor Laughing",
  "๐": "Slightly Smiling Face",
  "๐": "Upside-Down Face",
  "๐": "Winking Face",
  "๐": "Smiling Face with Smiling Eyes",
  "๐": "Smiling Face with Halo",
  "๐ฅฐ": "Smiling Face with Hearts",
  "๐": "Smiling Face with Heart-Eyes",
  "๐คฉ": "Star-Struck",
  "๐": "Face Blowing a Kiss",
  "๐": "Kissing Face",
  "๐": "Face Savoring Food",
  "๐": "Face with Tongue",
  "๐": "Winking Face with Tongue",
  "๐คช": "Zany Face",
  "๐": "Squinting Face with Tongue",
  "๐ค": "Money-Mouth Face",
  "๐ค": "Hugging Face",
  "๐คญ": "Face with Hand Over Mouth",
  "๐คซ": "Shushing Face",
  "๐ค": "Thinking Face",
  "๐ค": "Zipper-Mouth Face",
  "๐คจ": "Face with Raised Eyebrow",
  "๐": "Neutral Face",
  "๐": "Annoyed Face",
  "๐ถ": "Face Without Mouth",
  "๐": "Smirking Face",
  "๐": "Unamused Face",
  "๐": "Face with Rolling Eyes"
};
var emojisWeKnow = Object.keys(emojiDoctionary);

export default function App() {
  var [meaning, setMeaning] = useState("");
  function emojiInputHandler() {
    var userInput = event.target.value;
    var meaning = emojiDoctionary[userInput];
    if (meaning === undefined) {
      meaning = "Oops!! we don't have this emoji in our database.";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDoctionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Emoji interpreter</h1>
      <input onChange={emojiInputHandler}></input>
      <h2 style={{ color: "gray" }}>{meaning}</h2>
      <h3>Emojis we know</h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span key={emoji} onClick={() => emojiClickHandler(emoji)}>
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
