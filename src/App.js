import React, { useState, useEffect } from "react";
import "./App.scss";
import axios from "axios";
import MealList from "./components/MealList/MealList";
import Footer from "./components/Footer/Footer";
// import { randomMeal } from "./api";

function App() {
  const [random, setRandom] = useState([]);

  const randomMeal = async () => {
    try {
      const meals = [];
      for (let i = 0; i < 4; i++) {
        meals.push(
          await axios
            .get(`https://www.themealdb.com/api/json/v1/1/random.php`)
            .then((meal) => meal.data.meals[0])
        );
      }
      if (meals) {
        setRandom(meals);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    randomMeal();
  }, []);

  return (
    <div className="App">
      <header className="App-header">Meals</header>
      <div className="main">
        <MealList random={random} />
        {/* <MealList /> */}
      </div>

      <Footer />
    </div>
  );
}

export default App;
