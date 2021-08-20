import axios from "axios";

const BASE_URL = "https://www.themealdb.com/api/json/v1/1/";

export const getRandomMeals = async () => {
  try {
    const meals = [];
    for (let i = 0; i < 4; i++) {
      meals.push(
        await axios
          .get(`${BASE_URL}random.php`)
          .then((response) => response.data.meals[0])
          .catch((error) => console.log(error))
      );
    }
    if (meals) {
      return meals;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getCategories = async () => {
  try {
    const categories = [];
    for (let i = 0; i < 4; i++) {
      categories.push(
        await axios
          .get(`${BASE_URL}categories.php`)
          .then((response) => response.data.categories[i])
          .catch((error) => console.log(error))
      );
    }
    if (categories) {
      return categories;
    }
  } catch (error) {
    console.log(error);
  }
};

export const queryMeal = async (query) => {
  const queryMeals = await axios
    .get(`${BASE_URL}search.php?s=${query}`)
    .then((response) => response.data.meals)
    .catch((err) => console.log(err));

  if (queryMeals) {
    return queryMeals;
  }
};
