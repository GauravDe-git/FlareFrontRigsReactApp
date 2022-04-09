import "./App.css";
import Homepage from "./Pages/Homepage";
import ProductListing from "./Pages/ProductListing";
import logo from "./logo.png";
import Hero from "./Components/Hero";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element = {<Homepage/>}/>
        <Route path="/ProductListing" element = {<ProductListing/>}/>
      </Routes>
    </div>
  );
}

export default App;
