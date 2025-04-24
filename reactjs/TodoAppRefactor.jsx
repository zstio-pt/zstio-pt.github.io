// Przykład dobrze skonstruowanego komponentu
import { useState } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import TodoStats from "./TodoStats";
import "./TodoApp.css";

function TodoAppRefactor() {
  // Logika stanu i efektów...

  return (
    <div className="todo-app">
      <h1>Todo Lista</h1>
      <TodoForm onAddTask={addTask} />
      <ul className="task-list">
        {tasks.map((task) => (
          <TodoItem key={task.id} task={task} onToggle={toggleComplete} onDelete={deleteTask} />
        ))}
      </ul>
      <TodoStats tasks={tasks} />
    </div>
  );
}

// Zadanie: Zrefaktoruj swój kod według tych wskazówek
