import React from "react";
/* import classes from "./Tasks.css"; */
import Task from "./Task/Task";

const Tasks = (props) => {
  return props.taskAdded.map((task) => {
    return (
      // date: 164684, task: 'task'
      <Task
        task={task.newItem}
        key={task.id}
        removeTask={() => props.removeTask(task.id)}
      />
    );
  });
};
export default Tasks;
