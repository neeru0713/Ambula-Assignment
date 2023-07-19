import React, { useContext, useState } from "react";
import { TodoContext } from "../../context/TodoContext";

const TodoItem = ({ task, markTaskAsCompleted, removeTask }) => {
  const handleCheckboxChange = () => {
    markTaskAsCompleted(task.id);
  };

  const handleRemoveClick = () => {
    removeTask(task.id);
  };

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleCheckboxChange}
      />
      <p className={task.completed ? "completed" : ""}>{task.text}</p>
      <button onClick={handleRemoveClick}>Remove</button>
    </div>
  );
};

const TodoList = () => {
  const { tasks, totalTasks, completedTasks, addTask, markTaskAsCompleted, removeTask } = useContext(
    TodoContext
  );

  const [newTask, setNewTask] = useState("");

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim() !== "") {
      addTask(newTask);
      setNewTask("");
    }
  };

  return (
    <div className="todo-list">
      <h2>To-Do List</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a new task..."
          value={newTask}
          onChange={handleInputChange}
        />
        <button type="submit">Add Task</button>
      </form>
      {tasks.length === 0 ? (
        <p>Your to-do list is empty.</p>
      ) : (
        <>
          {tasks.map((task) => (
            <TodoItem
              key={task.id}
              task={task}
              markTaskAsCompleted={markTaskAsCompleted}
              removeTask={removeTask}
            />
          ))}
          <div className="todo-summary">
            <p>Total Tasks: {totalTasks}</p>
            <p>Completed Tasks: {completedTasks}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default TodoList;
