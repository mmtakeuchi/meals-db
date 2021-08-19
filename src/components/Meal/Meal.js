import React from "react";
import "./Meal.scss";
import { Link } from "react-router-dom";

const Meal = ({ meal }) => {
  // console.log(meal);
  return (
    <div className="meal">
      <Link to={`${meal.idMeal}`} className="link">
        <h2 className="mealName">{meal.strMeal}</h2>
        <img src={meal.strMealThumb} alt={meal.strMeal} />
      </Link>
    </div>
  );
};

export default Meal;
