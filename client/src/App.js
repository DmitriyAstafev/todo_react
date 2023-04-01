import { useState, useEffect, useCallback } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import axios from "axios";

function App() {
  const [taskList, setTaskList] = useState([]);

  // Загрузка списка задач с бэка
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/task")
      .then((res) => {
        setTaskList(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // Создание новой задачи
  const createTaskHandler = useCallback((task) => {
    axios
      .post("http://localhost:5000/api/v1/task", task)
      .then((res) => setTaskList((prev) => [...prev, res.data]))
      .catch((err) => console.log(err));
  }, []);

  // Удаление задачи
  const deleteTaskHandler = useCallback((id) => {
    axios
      .delete("http://localhost:5000/api/v1/task", { data: { id } })
      .then((res) =>
        setTaskList((prev) => prev.filter((task) => task.id !== res.data))
      )
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container-sm">
      <TaskForm createTaskHandler={createTaskHandler} />
      <TaskList taskList={taskList} deleteTaskHandler={deleteTaskHandler} />
    </div>
  );
}

export default App;
