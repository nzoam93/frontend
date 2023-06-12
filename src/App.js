import React from "react";
import {Route, Switch} from "react-router-dom";
import BackendStatement from "./components/backend-statement/BackendStatement";
import QuestionIndex from "./components/question/QuestionIndex";

function App() {
  return (
    <div className="App">
      <Switch >
        <Route exact path="/">
            <QuestionIndex/>
        </Route>
        <Route exact path="/backend-statement">
            <BackendStatement/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;