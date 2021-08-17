import React from "react";
import "./Meal.scss";
import MealDetails from "../MealDetails/MealDetails";

const Meal = ({ meal }) => {
  console.log(meal);
  return (
    <div className="meal">
      <h2>{meal.strMeal}</h2>
      <img src={`${meal.strMealThumb}/preview`} alt={meal.strMeal} />
    </div>
  );
};

export default Meal;
