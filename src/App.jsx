import "./App.css";
import Header from "./components/header";
import SearchProduct from "./components/searchProduct";
import MiniList from "./components/miniList";
import CardList from "./components/cardList";

function App() {
  return (
    <div className="App">
      <Header />
      <SearchProduct titleText="Find Unique Furniture For your home" />
      <MiniList titleText="Categories" />
      <CardList titleText="Popular Items" />
    </div>
  );
}

export default App;
