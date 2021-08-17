import React from "react";
import "./MealList.scss";
import Meal from "../Meal/Meal";

const MealList = (props) => {
  console.log(props.random);
  const randomMeals = props.random.length
    ? props.random.map((meal) => (
        <li key={meal.idMeal}>
          <Meal meal={meal} />
        </li>
      ))
    : null;

  return (
    <div>
      Meal List
      <ul className="list">{randomMeals}</ul>
      {/* <div>{props.random.strMeal}</div> */}
      {/* <Meal meal={randomMeal} /> */}
    </div>
  );
};

export default MealList;
