import "./styles.css";
import React, { useState } from "react";

var emojiDoctionary = {
  "😃": "Grinning face",
  "🤣": "Rolling on the Floor Laughing",
  "🙂": "Slightly Smiling Face",
  "🙃": "Upside-Down Face",
  "😉": "Winking Face",
  "😊": "Smiling Face with Smiling Eyes",
  "😇": "Smiling Face with Halo",
  "🥰": "Smiling Face with Hearts",
  "😍": "Smiling Face with Heart-Eyes",
  "🤩": "Star-Struck",
  "😘": "Face Blowing a Kiss",
  "😗": "Kissing Face",
  "😋": "Face Savoring Food",
  "😛": "Face with Tongue",
  "😜": "Winking Face with Tongue",
  "🤪": "Zany Face",
  "😝": "Squinting Face with Tongue",
  "🤑": "Money-Mouth Face",
  "🤗": "Hugging Face",
  "🤭": "Face with Hand Over Mouth",
  "🤫": "Shushing Face",
  "🤔": "Thinking Face",
  "🤐": "Zipper-Mouth Face",
  "🤨": "Face with Raised Eyebrow",
  "😐": "Neutral Face",
  "😑": "Annoyed Face",
  "😶": "Face Without Mouth",
  "😏": "Smirking Face",
  "😒": "Unamused Face",
  "🙄": "Face with Rolling Eyes"
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
