import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TodoProvider } from "./context/TodoContext";
import { CartProvider } from "./context/CartContext";
import TodoList from "./components/todolist/TodoList";
import ShoppingCart from "./components/shoppingcart/ShoppingCart";
import WeatherWidget from "./components/WeatherWidget";
import ContactForm from "./components/content/ContactForm";
import About from "./components/content/About";
import Home from "./components/content/Home";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Route for Home page */}
          <Route exact path="/">
            <Home />
          </Route>

          {/* Route for About page */}
          <Route path="/about">
            <About />
          </Route>

          {/* Route for Contact page */}
          <Route path="/contact">
            <ContactForm />
          </Route>

          {/* Route for Todo List page */}
          <Route path="/todo">
            <TodoProvider>
              <TodoList />
            </TodoProvider>
          </Route>

          {/* Route for Shopping Cart page */}
          <Route path="/cart">
            <CartProvider>
              <ShoppingCart />
            </CartProvider>
          </Route>

          {/* Route for Weather Widget page */}
          <Route path="/weather">
            <WeatherWidget />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
