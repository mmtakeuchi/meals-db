import React from "react";
import "./Meal.scss";
import { Link } from "react-router-dom";

const Meal = ({ type, meal, selectMeal }) => {
  const handleSelectMeal = (id) => {
    selectMeal(meal.idMeal);
  };

  const handleSelectCateogry = (id) => {
    selectMeal(meal.strCategory);
  };
  // console.log(meal, type);

  return (
    <React.Fragment>
      {type === "meal" ? (
        <div className="meal" onClick={handleSelectMeal}>
          <Link to={`/meals/${meal.idMeal}`} className="link">
            <h2 className="mealTitle">{meal.strMeal}</h2>
            <img
              className="cardImg"
              src={`${meal.strMealThumb}`}
              alt={meal.strMeal}
            />
          </Link>
        </div>
      ) : (
        <div className="meal" onClick={handleSelectCateogry}>
          <Link to={`/meals/category/${meal.strCategory}`} className="link">
            <h2 className="mealTitle">{meal.strCategory}</h2>
            <img
              className="cardImg"
              src={meal.strCategoryThumb}
              alt={meal.strCategory}
            />
          </Link>
        </div>
      )}
    </React.Fragment>
  );
};

export default Meal;
