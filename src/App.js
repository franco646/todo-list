import React from "react";

import AddTask from "./components/addTask/addTask";
import TaskList from "./components/taskList/taskList";
import Filters from "./components/filters/filters";

import { title } from "./App.module.scss";


function App() {
  return (
    <div>
      <h1 className={title}>TODO LIST</h1>
      <AddTask />
      <Filters />
      <TaskList />
    </div>
  );
}

export default App;
