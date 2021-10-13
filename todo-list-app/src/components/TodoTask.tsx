import { timingSafeEqual } from "crypto";
import React from "react";
import { ITask } from "../Interfaces";

interface Props {
  task: ITask; // Required prop
  // task?: ITask; //Optional prop,
  completeTask(taskName:string): void // Call a function as a prop
}

const TodoTask = ({ task,completeTask }: Props) => {
  return (
    <div className="task">
      <div className="content">
          <span>{task.taskName}</span>
          <span>{task.deadline}</span>
      </div>
      <button onClick={() => {
          completeTask(task.taskName)
      }}>X</button>
    </div>
  );
};

export default TodoTask;
