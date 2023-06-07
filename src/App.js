import React from "react";
import {Route, Switch} from "react-router-dom";
import BackendStatement from "./components/backend-statement/BackendStatement";
import QuestionIndex from "./components/question/QuestionIndex";

function App() {
  return (
    <div className="App">
      <Switch >
        <Route exact path="/">
            <BackendStatement/>
            <QuestionIndex/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;