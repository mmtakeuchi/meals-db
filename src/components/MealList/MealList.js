import React from "react";
import "./MealList.scss";
import Meal from "../Meal/Meal";

const MealList = ({ title, meals }) => {
  console.log(meals);
  const mealsList = meals.length
    ? meals.map((meal) => (
        <li key={meal.idMeal}>
          <Meal meal={meal} />
        </li>
      ))
    : null;

  return (
    <React.Fragment>
      <div className="title">
        {title === "Random" ? `${title} Meals` : `${title}`}
      </div>
      <ul className="list">{mealsList}</ul>
      {/* <div>{props.random.strMeal}</div> */}
      {/* <Meal meal={randomMeal} /> */}
    </React.Fragment>
  );
};

export default MealList;
