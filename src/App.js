import "./App.css";
import Homepage from "./Pages/Homepage";
import ProductListing from "./Pages/ProductListing";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import logo from "./logo.png";
import Hero from "./Components/Hero";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element = {<Homepage/>}/>
        <Route path="/ProductListing" element = {<ProductListing/>}/>
        <Route path="/Cart" element = {<Cart/>}/>
        <Route path="/Login" element = {<Login/>}/>
        <Route path="/Signup" element = {<Signup/>}/>
      </Routes>
    </div>
  );
}

export default App;
