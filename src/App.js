import React from "react";
import {Route, Switch} from "react-router-dom";
import BackendStatement from "./components/backend-statement/BackendStatement";
import HelloWorld from "./components/helloWorld/HelloWorld";
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
        <Route exact path="/hello">
            <HelloWorld />
        </Route>
      </Switch>
    </div>
  );
}

export default App;