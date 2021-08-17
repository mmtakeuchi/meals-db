import "./App.scss";
import MealList from "./components/MealList/MealList";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">Meals</header>
      <div className="main">
        <MealList />
      </div>

      <Footer />
    </div>
  );
}

export default App;
