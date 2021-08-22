import React, { useState } from "react";
import { useHistory } from "react-router";
import { queryMeal } from "../../api";
import "./Search.scss";

const Search = () => {
  const history = useHistory();
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    queryMeal(input);
    setInput("");
    history.push(`/meals/search/${input}`);
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
        <button className="submitBtn" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
