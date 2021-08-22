import React, { useState } from "react";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import FirstLetter from "./components/FirstLetter/FirstLetter";
import MealList from "./components/MealList/MealList";
import Footer from "./components/Footer/Footer";
import MealDetails from "./components/MealDetails/MealDetails";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.scss";

const App = () => {
  const [selectedMeal, setSelectedMeal] = useState("");

  const selectMeal = (id) => {
    setSelectedMeal(id);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Search />
        <div className="main">
          <Switch>
            <Route exact path="/">
              <MealList
                title="Random Meals"
                type="meal"
                selectMeal={selectMeal}
              />
              {/* <MealList
                title="Popular Categories"
                type="category"
                selectMeal={selectMeal}
              /> */}
            </Route>
            <Route path="/meals/search/:id">
              <MealList
                title="Meals"
                // meals={searchMeal}
                selectMeal={selectMeal}
              />
            </Route>
            <Route path="/meals/letter/:id">
              <MealList
                title="Meals"
                type="meal"
                // meals={searchMeal}
                selectMeal={selectMeal}
              />
            </Route>
            <Route path="/meals/category/:id">
              <MealList
                title="Meals"
                type="meal"
                // meals={searchMeal}
                selectMeal={selectMeal}
              />
            </Route>
            <Route path="/meals/:id">
              <MealDetails meal={selectedMeal} />
            </Route>
          </Switch>
          <FirstLetter />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
