import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const Home = () => {
  return (
    <div className="home-container">
      <h2>Welcome to the general knowledge quizz!</h2>
      <Link to="/quiz">
        <Button>Start Quiz</Button>
      </Link>
    </div>
  );
};

export default Home;
