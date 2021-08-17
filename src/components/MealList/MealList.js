import React from "react";
import "./MealList.scss";
import Meal from "../Meal/Meal";

const MealList = (props) => {
  return (
    <div>
      Meal List
      <div>
        <Meal />
      </div>
    </div>
  );
};

export default MealList;
