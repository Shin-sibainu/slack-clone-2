import React from "react";
import "./App.css";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <>
          <Switch>
            <Route exact path="/">
              <h1>This is the Homepage</h1>
            </Route>
          </Switch>
        </>
      </Router>
    </div>
  );
}

export default App;
