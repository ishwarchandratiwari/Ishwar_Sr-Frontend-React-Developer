import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Products from "./components/products";
import Filter from "./components/filter";
import Login from "./components/login";
import Nav from "./components/nav";
import Basket from "./components/basket";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <Nav />



        <div className="row">
          <div className="col-md-9">
            <Filter />
            <hr />
            <Products />
          </div>
          <div className="col-md-3">
            <Basket />
            <Login />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
