import "./App.css";
import Header from "./components/header";
import SearchProduct from "./components/searchProduct";
import MiniList from "./components/miniList";

function App() {
  return (
    <div className="App">
      <Header />
      <SearchProduct titleText="Find Unique Furniture For your home" />
      <MiniList titleText="Categories" />
    </div>
  );
}

export default App;
