import React from "react";
import "./FirstLetter.scss";

const letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const FirstLetter = ({ selectMeal }) => {
  const handleSelect = (e) => {
    selectMeal(e.target.id);
  };

  const dashLetters = () => {
    const result = [];
    for (let i = 0; i < letters.length; i++) {
      if (i !== letters.length - 1) {
        result.push(`${letters[i]} - `);
      } else {
        result.push(letters[i]);
      }
    }

    return result;
  };

  const renderLetters = dashLetters().map((letter, i) => (
    <span key={i} className="letter" id={letters[i]} onClick={handleSelect}>
      {letter}
    </span>
  ));

  return (
    <div>
      <h3>Browse By Letter</h3>
      <div className="letters">{renderLetters}</div>
    </div>
  );
};

export default FirstLetter;
