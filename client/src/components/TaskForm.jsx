import React, { useState } from "react";

const TaskForm = ({ createTaskHandler }) => {
  const initInputValue = {
    title: "",
    description: "",
  };
  const [inputValue, setInputValue] = useState(initInputValue);

  // Обработчик значений в инпуте
  const changeHandler = (e) => {
    setInputValue((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  return (
    <div className="text-center">
      <h1 className="mb-3">Список задач на React JS</h1>
      <div className="mb-3">
        <label htmlFor="InputTitle" className="form-label">
          Введите название задачи
        </label>
        <input
          onChange={changeHandler}
          type="text"
          className="form-control"
          id="InputTitle"
          name="title"
          value={inputValue.title}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="InputDescription" className="form-label">
          Введите описание задачи
        </label>
        <input
          onChange={changeHandler}
          type="text"
          className="form-control"
          id="InputDescription"
          name="description"
          value={inputValue.description}
        />
      </div>
      <button
        onClick={() => {
          createTaskHandler(inputValue);
          setInputValue(initInputValue);
        }}
        type="submit"
        className="btn btn-outline-primary mb-3"
      >
        Создать задачу
      </button>
    </div>
  );
};

export default React.memo(TaskForm);
