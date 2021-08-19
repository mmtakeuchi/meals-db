// import axios from "axios";

// export const randomMeal = async () => {
//   try {
//     const meals = [];
//     for (let i = 0; i < 4; i++) {
//       const food = await axios
//         .get(`https://www.themealdb.com/api/json/v1/1/random.php`)
//         .then((meal) => meal.data.meals[0]);

//       if (food) {
//         meals.push(food);
//       }
//     }

//     if (meals) {
//       return meals;
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };
