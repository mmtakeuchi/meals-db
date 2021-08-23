import React, { useState, useEffect } from "react";
import "./MealList.scss";
import { useLocation } from "react-router-dom";
import Meal from "../Meal/Meal";
import {
  getRandomMeals,
  getCategories,
  categoryMeals,
  getFirstLetterMeals,
  queryMeal,
} from "../../api";

const MealList = ({ selectMeal }) => {
  const location = useLocation();
  const [randomMeals, setRandomMeals] = useState([]);
  const [catMeals, setCatMeals] = useState([]);
  const [results, setResults] = useState([]);
  const path = location.pathname.split("/");
  console.log(location);
  // console.log(results);

  useEffect(() => {
    setResults([]);
    if (path[2] === "search") {
      queryMeal(path[3]).then((data) => setResults(data));
    } else if (path[2] === "category") {
      categoryMeals(path[3]).then((data) => setResults(data));
    } else if (path[2] === "letter") {
      getFirstLetterMeals(path[3]).then((data) => setResults(data));
    }
  }, [location.pathname]);

  const mealsList = results.length
    ? results.map((meal) => (
        <li key={meal.idMeal} className="listMeal">
          <Meal meal={meal} type="meal" selectMeal={selectMeal} />
        </li>
      ))
    : null;

  const renderMeals = (meals) =>
    meals.length
      ? meals.map((meal) => (
          <li key={meal.idMeal} className="listMeal">
            <Meal meal={meal} type="meal" selectMeal={selectMeal} />
          </li>
        ))
      : null;

  const renderCategories = (categories) =>
    categories.length
      ? categories.map((category) => (
          <li key={category.idCategory} className="listMeal">
            <Meal meal={category} type="category" selectMeal={selectMeal} />
          </li>
        ))
      : null;

  const noResults = (
    <div className="noneFound">
      No Meals Were Found.
      <br />
      Please Try Searching Another Item.
    </div>
  );

  useEffect(() => {
    getRandomMeals().then((data) => setRandomMeals(data));
    getCategories().then((data) => setCatMeals(data));
  }, []);

  const renderHome = (
    <React.Fragment>
      <React.Fragment>
        <div className="title">Random Meals</div>
        <ul className="list">
          {randomMeals.length ? renderMeals(randomMeals) : noResults}
        </ul>
      </React.Fragment>
      <React.Fragment>
        <div className="title">Popular Categories</div>
        <ul className="list">
          {catMeals.length ? renderCategories(catMeals) : noResults}
        </ul>
      </React.Fragment>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      {location.pathname === "/" ? (
        <React.Fragment>{renderHome}</React.Fragment>
      ) : (
        <React.Fragment>
          <div className="title">Meals</div>
          <ul className="list">{results.length ? mealsList : noResults}</ul>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default MealList;
