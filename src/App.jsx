import "./App.css";
import Header from "./components/header";
import SearchProduct from "./components/searchProduct";

function App() {
  return (
    <div className="App">
      <Header />
      <SearchProduct titleText="Find Unique Furniture For your home" />
    </div>
  );
}

export default App;
