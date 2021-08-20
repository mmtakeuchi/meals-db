import React from "react";
import "./MealList.scss";
import Meal from "../Meal/Meal";

const MealList = ({ title, meals, selectMeal }) => {
  // console.log(selectMeal);
  const mealsList = meals.length
    ? meals.map((meal) => (
        <li key={meal.idMeal || meal.idCategory}>
          <Meal meal={meal} selectMeal={selectMeal} />
        </li>
      ))
    : null;

  return (
    <React.Fragment>
      <div className="title">
        {title === "Random" ? `${title} Meals` : `${title}`}
      </div>
      <ul className="list">{mealsList}</ul>
    </React.Fragment>
  );
};

export default MealList;
