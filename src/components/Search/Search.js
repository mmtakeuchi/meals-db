import React, { useState } from "react";
import { useHistory } from "react-router";
import "./Search.scss";

const Search = ({ queryMeal }) => {
  const history = useHistory();
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    queryMeal(input);
    setInput("");
    history.push("/search");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="search">
        <input
          className="field"
          type="text"
          placeholder="Search for a meal"
          value={input}
          onChange={handleInput}
        />
        <input className="submitBtn" type="submit" />
      </form>
    </div>
  );
};

export default Search;
