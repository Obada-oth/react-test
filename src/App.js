import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import UserInputs from "./components/UserInputs";
import Radar from "./components/Radar";
import Bar from "./components/Bar";
import { getRadarChartUrl, getBarChartUrl } from "./util/getChartUrl";

export const inputContext = React.createContext({});

function App() {
  const exampleData = [10, 9, 7, 5, 8, 6, 10];
  const [dataSet, setDataSet] = useState(exampleData);
  return (
    <div className="App">
      <inputContext.Provider value={{ dataSet, setDataSet }}>
        <Router>
          <Switch>
            <Route path="/Radar">
              <Navbar />
              <UserInputs />
              <Radar getRadarChartUrl={getRadarChartUrl} />
            </Route>
            <Route path="/Bar">
              <Navbar />
              <UserInputs />
              <Bar getBarChartUrl={getBarChartUrl} />
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
