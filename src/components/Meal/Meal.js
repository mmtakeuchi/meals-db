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

  return (
    <React.Fragment>
      {type === "meal" ? (
        <div className="meal" onClick={handleSelectMeal}>
          <Link to={`/meals/${meal.idMeal}`} className="link">
            <h2 className="mealName">{meal.strMeal}</h2>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
          </Link>
        </div>
      ) : (
        <div className="meal" onClick={handleSelectCateogry}>
          <Link to={`/meals/category/${meal.strCategory}`} className="link">
            <h2 className="mealName">{meal.strCategory}</h2>
            <img src={meal.strCategoryThumb} alt={meal.strCategory} />
          </Link>
        </div>
      )}
    </React.Fragment>
  );
};

export default Meal;
