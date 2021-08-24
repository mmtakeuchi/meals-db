import React from "react";
import { Link } from "react-router-dom";
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

  // const dashLetters = () => {
  //   const result = [];
  //   for (let i = 0; i < letters.length; i++) {
  //     if (i !== letters.length - 1) {
  //       result.push(`${letters[i]} - `);
  //     } else {
  //       result.push(letters[i]);
  //     }
  //   }

  //   return result;
  // };

  const renderLetters = letters.map((letter, i) => (
    <React.Fragment>
      {i === letters.length - 1 ? (
        <Link
          className="link"
          to={`/meals/letter/${letters[i]}`}
          key={i}
          id={letters[i]}
          onClick={handleSelect}
        >
          <span className="letter">{letter}</span>
        </Link>
      ) : (
        <React.Fragment key={i}>
          <Link
            className="link"
            to={`/meals/letter/${letters[i]}`}
            key={i}
            id={letters[i]}
            onClick={handleSelect}
          >
            <span className="letter">{letter}</span>
          </Link>
          <span className="dash"> / </span>
        </React.Fragment>
      )}
    </React.Fragment>
  ));

  return (
    <div className="alpha">
      <div className="title">Browse By Letter</div>
      <div className="letters">{renderLetters}</div>
    </div>
  );
};

export default FirstLetter;
