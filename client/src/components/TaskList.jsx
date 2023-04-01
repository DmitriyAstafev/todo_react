import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ taskList, deleteTaskHandler }) => {
  return (
    <ol className="list-group list-group-numbered">
      {taskList.map((task) => (
        <TaskItem
          key={task.id}
          title={task.title}
          description={task.description}
          id={task.id}
          deleteTaskHandler={deleteTaskHandler}
        />
      ))}
    </ol>
  );
};

export default TaskList;
