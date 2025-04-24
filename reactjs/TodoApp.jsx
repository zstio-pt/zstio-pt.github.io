// src/components/TodoApp.jsx
import { useState } from "react";
import "./TodoApp.css";

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function addTask(e) {
    e.preventDefault();
    if (!newTask.trim()) return;

    const task = {
      id: Date.now(),
      text: newTask,
      completed: false,
    };

    setTasks([...tasks, task]);
    setNewTask("");
  }

  function toggleComplete(id) {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)));
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <div className="todo-app">
      <h1>Todo Lista</h1>

      <form onSubmit={addTask}>
        <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder="Dodaj nowe zadanie..." />
        <button type="submit">Dodaj</button>
      </form>

      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className={task.completed ? "completed" : ""}>
            <span onClick={() => toggleComplete(task.id)}>{task.text}</span>
            <button onClick={() => deleteTask(task.id)}>Usuń</button>
          </li>
        ))}
      </ul>

      <div className="stats">
        <p>Zadania ukończone: {tasks.filter((t) => t.completed).length}</p>
        <p>Zadania pozostałe: {tasks.filter((t) => !t.completed).length}</p>
      </div>
    </div>
  );
}

export default TodoApp;
