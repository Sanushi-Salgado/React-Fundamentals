import React, { FC, ChangeEvent, useState } from "react";
import "./App.css";
import { ITask } from "./Interfaces";
import TodoTask from "./components/TodoTask";

const App: FC = () => {
  // Define the type of the state
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setToDoList] = useState<ITask[]>([]);

  // Called whenever the input changes
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name == "task") {
      setTask(event.target.value);
    } else {
      // Converts the value in to a number
      setDeadline(Number(event.target.value));
    }
  };

  const addTask = (): void => {
    // Add the new task to the old to-do list
    // Populating the todo list with objects of type ITask
    const newTask = {
      taskName: task,
      deadline: deadline,
    };
    setToDoList([...todoList, newTask]);
    console.log(todoList);

    // Clear everything
    setTask("");
    setDeadline(0);
  };

  const comppleteTask = (taskName: string): void => {
    // Loop through every element in the todo list
    setToDoList(todoList.filter((task) => {
      return task.taskName != taskName;
    }));
  };

  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input
            type="text"
            placeholder="Task..."
            name="task"
            value={task}
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Deadline (in Days)..."
            name="deadline"
            value={deadline}
            onChange={handleChange}
          />
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="todoList">
        {todoList.map((task: ITask, key: number) => {
          return <TodoTask key={key} task={task} completeTask={comppleteTask}/>;
        })}
      </div>
    </div>
  );
};

export default App;
