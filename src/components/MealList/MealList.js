import React from "react";
import "./MealList.scss";
import { useParams } from "react-router-dom";
import Meal from "../Meal/Meal";

const MealList = ({ title, type, meals, selectMeal }) => {
  const { id } = useParams();

  const mealsList = meals.length
    ? meals.map((meal) => (
        <li key={meal.idMeal || meal.idCategory}>
          <Meal meal={meal} type={type} selectMeal={selectMeal} />
        </li>
      ))
    : null;

  return (
    <React.Fragment>
      {meals.length ? (
        <React.Fragment>
          <div className="title">{title}</div>
          <ul className="list">{mealsList}</ul>
        </React.Fragment>
      ) : (
        <div className="noneFound">
          No Meals Were Found.
          <br />
          Please Try Searching Another Item.
        </div>
      )}
    </React.Fragment>
  );
};

export default MealList;
