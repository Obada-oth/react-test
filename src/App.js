import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import UserInputs from "./components/UserInputs";
import Radar from "./components/Radar";
import Bar from "./components/Bar";

export const inputContext = React.createContext([10, 9, 7, 5, 8, 6, 10]);

function App() {
  console.log(inputContext);
  return (
    <div className="App">
      <inputContext.Provider value={inputContext}>
        <Router>
          <Switch>
            <Route path="/Radar">
              <Navbar />
              <UserInputs />
              <Radar />
            </Route>
            <Route path="/Bar">
              <Navbar />
              <UserInputs />
              <Bar />
            </Route>
            <Route path="/">
              <Navbar />
            </Route>
          </Switch>
        </Router>
      </inputContext.Provider>
    </div>
  );
}

export default App;
