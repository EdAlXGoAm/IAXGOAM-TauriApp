import { useState } from "react";
import "./App.css";
import TaskTableBT from "./components/tasksTableBT";
import TaskTableMD from "./components/tasksTableMD";

function App() {

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <h3>Tareas, Alarmas y Eventos!</h3>
        </div>
      </div>

      <div className="row">
        <div className="col">
          {/* <TaskTableBT /> */}
          <TaskTableMD />
        </div>
      </div>
    </div>
  );
}

export default App;
