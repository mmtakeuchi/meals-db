import React, { useState, useEffect } from "react";
import "./App.scss";
import axios from "axios";
import MealList from "./components/MealList/MealList";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MealDetails from "./components/MealDetails/MealDetails";
import Search from "./components/Search/Search";
// import { randomMeal } from "./api";

const App = () => {
  const [random, setRandom] = useState([]);
  const [searchMeal, setSearchMeal] = useState([]);

  const randomMeal = async () => {
    try {
      const meals = [];
      for (let i = 0; i < 4; i++) {
        meals.push(
          await axios
            .get(`https://www.themealdb.com/api/json/v1/1/random.php`)
            .then((response) => response.data.meals[0])
        );
      }
      if (meals) {
        setRandom(meals);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const queryMeal = async (query) => {
    console.log(query);

    const queryMeals = await axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
      .then((response) => response.data.meals)
      .catch((err) => console.log(err));

    if (queryMeals) {
      setSearchMeal(queryMeals);
    }
  };

  console.log(searchMeal);

  useEffect(() => {
    randomMeal();
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">Meals</header>
        <Search queryMeal={queryMeal} />
        <div className="main">
          <Switch>
            <Route exact path="/">
              <MealList title="Random" meals={random} />
            </Route>
            <Route path="/search">
              <MealList title="Meals" meals={searchMeal} />
            </Route>
            <Route path="/:id">
              <MealDetails />
            </Route>
          </Switch>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
