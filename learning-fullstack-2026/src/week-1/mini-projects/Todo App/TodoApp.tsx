import { useState } from "react";
import "./TodoApp.css";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

type FilterType = "all" | "completed" | "uncompleted";

const TodoApp = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState<FilterType>("all");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // ↑ New state for filtering

  const addTodo = (): void => {
    if (!input.trim()) return;

    const newTodo: Todo = {
      id: Date.now(),
      text: input,
      completed: false,
    };

    setTodos((prev) => [...prev, newTodo]);
    setInput("");
  };

  const toggleTodo = (id: number): void => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
    );
  };

  const editTodo = (): void => {};

  const removeTodo = (id: number): void => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  // ============================================================
  // FILTER LOGIC: Show todos based on selected filter
  // ============================================================
  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "uncompleted") return !todo.completed;
    return true; // "all"
  });

  // Count stats
  const completedCount = todos.filter((t) => t.completed).length;
  const uncompletedCount = todos.filter((t) => !t.completed).length;

  return (
    <div className="todo-container">
      <h1>📝 Todo App</h1>

      {/* INPUT SECTION */}
      <div className="input-section">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") addTodo();
          }}
          placeholder="Add a new todo..."
          className="todo-input"
        />
        <button onClick={addTodo} className="add-btn">
          Add
        </button>
      </div>

      {/* FILTER BUTTONS */}
      <div className="filter-section">
        <button onClick={() => setFilter("all")}>All ({todos.length})</button>
        <button onClick={() => setFilter("completed")}>
          ✅ Completed ({completedCount})
        </button>
        <button onClick={() => setFilter("uncompleted")}>
          ⭕ Uncompleted ({uncompletedCount})
        </button>
      </div>

      {/* TODO LIST */}
      <div className="todo-list">
        {todos.length === 0 ? (
          <p className="empty-message">📭 No todos yet. Add one above!</p>
        ) : filteredTodos.length === 0 ? (
          <p className="empty-message">
            📭 No {filter} todos. Try another filter!
          </p>
        ) : (
          filteredTodos.map((todo) => (
            <div key={todo.id} className="todo-item">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                className="todo-checkbox"
              />
              <span>{todo.text}</span>
              <button
                onClick={() => removeTodo(todo.id)}
                className="delete-btn"
              >
                ❌
              </button>
              <button onClick={() => setIsModalOpen(true)}>Edit</button>
              {isModalOpen && (
                <div className="modal">
                  <input type="text" onChange={() => editTodo()} />
                  <button onClick={() => setIsModalOpen(false)}>Close</button>
                </div>
              )}
            </div>
          ))
        )}
      </div>

      {/* STATS */}
      {todos.length > 0 && (
        <div className="stats">
          <p>
            Total: {todos.length} | ✅ Completed: {completedCount} | ⭕
            Uncompleted: {uncompletedCount}
          </p>
        </div>
      )}
    </div>
  );
};
export default TodoApp;
