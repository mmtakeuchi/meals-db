import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import FirstLetter from "./components/FirstLetter/FirstLetter";
import MealList from "./components/MealList/MealList";
import Footer from "./components/Footer/Footer";
import MealDetails from "./components/MealDetails/MealDetails";
import axios from "axios";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.scss";
import { getRandomMeals, getCategories } from "./api";

const BASE_URL = "https://www.themealdb.com/api/json/v1/1/";

const App = () => {
  const [random, setRandom] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchMeal, setSearchMeal] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState("");

  const queryMeal = async (query) => {
    try {
      const queryMeals = await axios
        .get(`${BASE_URL}search.php?s=${query}`)
        .then((response) => response.data.meals)
        .catch((err) => console.log(err));

      if (queryMeals) {
        setSearchMeal(queryMeals);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getFirstLetterMeals = async (id) => {
    try {
      const letterMeals = await axios
        .get(`${BASE_URL}search.php?f=${id}`)
        .then((response) => response.data.meals)
        .catch((error) => console.log(error));

      if (letterMeals) {
        setSearchMeal(letterMeals);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const categoryMeals = async (category) => {
    try {
      const catMeals = await axios
        .get(`${BASE_URL}filter.php?c=${category}`)
        .then((response) => response.data.meals)
        .catch((error) => console.log(error));

      if (catMeals) {
        setSearchMeal(catMeals);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const selectMeal = (id) => {
    setSelectedMeal(id);
  };

  useEffect(() => {
    getRandomMeals().then((data) => setRandom(data));
  }, []);

  useEffect(() => {
    // getCategories();
    getCategories().then((data) => setCategories(data));
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Search queryMeal={queryMeal} />
        <div className="main">
          <Switch>
            <Route exact path="/">
              <MealList
                title="Random Meals"
                type="meal"
                meals={random}
                selectMeal={selectMeal}
              />
              <MealList
                title="Popular Categories"
                type="category"
                meals={categories}
                selectMeal={categoryMeals}
              />
            </Route>
            <Route path="/meals/search">
              <MealList
                title="Meals"
                meals={searchMeal}
                selectMeal={selectMeal}
              />
            </Route>
            <Route path="/meals/letter/:id">
              <MealList
                title="Meals"
                type="meal"
                meals={searchMeal}
                selectMeal={selectMeal}
              />
            </Route>
            <Route path="/meals/category/:id">
              <MealList
                title="Meals"
                type="meal"
                meals={searchMeal}
                selectMeal={selectMeal}
              />
            </Route>
            <Route path="/meals/:id">
              <MealDetails meal={selectedMeal} />
            </Route>
          </Switch>
          <FirstLetter selectMeal={getFirstLetterMeals} />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
