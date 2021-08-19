import React from "react";
import "./Meal.scss";
import { Link } from "react-router-dom";

const Meal = ({ meal, selectMeal }) => {
  // console.log(meal, selectMeal);

  const handleSelect = (id) => {
    selectMeal(meal.idMeal);
  };

  return (
    <div className="meal" onClick={handleSelect}>
      <Link to={`/meals/${meal.idMeal}`} className="link">
        <h2 className="mealName">{meal.strMeal}</h2>
        <img src={meal.strMealThumb} alt={meal.strMeal} />
      </Link>
    </div>
  );
};

export default Meal;
