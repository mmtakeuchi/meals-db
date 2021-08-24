import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./MealDetails.scss";

const MealDetails = ({ meal }) => {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const [instructions, setInstructions] = useState("");
  useEffect(() => getMeal(), []);

  const getMeal = async () => {
    const meal = await axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((response) => response.data.meals[0])
      .catch((error) => console.log(error));

    if (meal) {
      setDetails(meal);
      setInstructions(meal.strInstructions);
    }
  };

  const getIngredients = () => {
    const filterDetails = (type) =>
      Object.keys(details)
        .filter((detail) => detail.includes(type))
        .map((element) => details[element])
        .filter(Boolean);

    const combineIngredientMeasure = (items, amount) => {
      let result = [];
      for (let i = 0; i < items.length; i++) {
        result.push(`${amount[i]} ${items[i]}`.trim());
      }

      return result;
    };

    const ingredients = filterDetails("strIngredient");
    const measure = filterDetails("strMeasure");

    return combineIngredientMeasure(ingredients, measure);
  };

  const listInstructions = () => {
    const steps = instructions.split(".");
    return steps.slice(0, -1);
  };

  // console.log(listInstructions());
  return (
    <React.Fragment>
      {details && (
        <div className="details">
          <div className="topDetails">
            <div className="mealName">
              <h2>{details.strMeal}</h2>
              <img
                className="mealImg"
                src={details.strMealThumb}
                alt={details.strMeal}
              />
              <div className="category">
                <Link
                  className="link"
                  to={`/meals/category/${details.strCategory}`}
                >
                  {details.strCategory}
                </Link>
              </div>
            </div>
            <div className="mealIngredients">
              <h2 className="section">Ingredients</h2>
              <ul className="lists">
                {getIngredients().map((ingredient, i) => (
                  <li key={i} className="listItem">
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="instructions">
            <h2 className="section">Instructions</h2>
            <ul className="lists">
              {listInstructions().map((step, i) => (
                <li key={i} className="listItem">
                  {step}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default MealDetails;
