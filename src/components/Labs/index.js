import React from "react";
import { Link } from "react-router-dom";
import Classes from "./Classes";
import ConditionalOutput from "./ConditionalOutput";
import Styles from "./Styles";
import TodoList from "./Todo";

const Labs = () => {
  return (
    <>
      <h1>Labs</h1>
      <Link to="/hello">Hello</Link> | <Link to="/tuiter/home">Tuiter</Link>
      <ConditionalOutput />
      <Styles />
      <Classes />
      <TodoList />
    </>
  );
};

export default Labs;
