import React from "react";
import TodoList from "./components/TodoList";
import TodoAdd from "./components/TodoAdd";
import Statistic from "./components/Statistic";
import "./styles.scss";

const App = () => (
  <>
    <h3>TodoApp by DevNotes</h3>
    <small>Stack: ReactJS, RecoilJS.</small>
    <Statistic />
    <TodoAdd />
    <TodoList />
  </>
);

export default App;
