import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import { getQuiz } from "./api/getQuiz";
import Home from "./components/Home";
import Card from "./components/Card";

const fetchQuiz = () => {
  getQuiz().then((response) => {
    const questions = response.results;
    console.log(questions);
  });
};

class App extends Component {
  constructor() {
    super();
    fetchQuiz();
  }
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />;
          <Route path="/quiz" component={Card} />
        </Switch>
      </div>
    );
  }
}

export default App;
