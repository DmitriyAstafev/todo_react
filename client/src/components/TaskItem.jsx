import React from "react";

const TaskItem = ({ title, description, id, deleteTaskHandler }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div className="ms-2 me-auto">
        <div className="fw-bold">{title}</div>
        {description}
      </div>
      <button
        onClick={() => deleteTaskHandler(id)}
        type="button"
        className="btn btn-outline-danger btn-sm"
      >
        Удалить
      </button>
    </li>
  );
};

export default React.memo(TaskItem);
