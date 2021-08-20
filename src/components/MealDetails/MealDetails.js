import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./MealDetails.scss";

const MealDetails = ({ meal }) => {
  const { id } = useParams();
  const [details, setDetails] = useState({});

  const getMeal = async () => {
    const meal = await axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((response) => response.data.meals[0])
      .catch((error) => console.log(error));

    if (meal) {
      setDetails(meal);
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

  console.log(details);

  useEffect(() => getMeal(), []);

  return (
    <div className="details">
      <div className="mealImg">
        <h2>{details.strMeal}</h2>
        <img src={details.strMealThumb} alt={details.strMeal} />
      </div>
      <div className="category">
        {/* <Link className="link">{details.strCategory}</Link> */}
        {details.strCategory}
      </div>
      <div className="mealIngredients">
        <h2 className="section">Ingredients</h2>
        <ul>
          {getIngredients().map((ingredient, i) => (
            <li key={i}>{ingredient}</li>
          ))}
        </ul>
      </div>
      <div className="instructions">
        <h2 className="section">Instructions</h2>
        {details.strInstructions}
      </div>
    </div>
  );
};

export default MealDetails;
