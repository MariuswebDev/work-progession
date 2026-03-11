import { useState } from "react";
import "./TodoApp.css";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

type FilterType = "all" | "completed" | "uncompleted";

export const TodoApp = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState<FilterType>();
  const [editId, setEditId] = useState<null | number>(null);
  const [edit, setEdit] = useState("");
  const [openModal, setOpenModel] = useState(false);

  const addTodo = (): void => {
    if (!input.trim()) return;

    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false,
    };

    setTodos((prev) => [...prev, newTodo]);
    setInput("");
  };

  const editTodo = (): void => {
    setTodos(
      todos.map((todo) =>
        todo.id === editId ? { ...todo, text: edit } : todo,
      ),
    );
    setEdit("");
    setOpenModel(false);
    setEditId(null);
  };

  const toggleTodo = (id: number): void => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const removeTodo = (id: number): void => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const filterTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "uncompleted") return !todo.completed;
    return true;
  });

  const completedTasks = todos.filter((todo) => todo.completed).length;
  const unCompletedTasks = todos.filter((todo) => !todo.completed).length;

  return (
    <>
      <div className="todo-card">
        <h1>📋 Todo App</h1>
        <div className="todo-section">
          <div className="add-section">
            <div className="input-add">
              <input
                type="text"
                className="inputList"
                placeholder="Enter a task..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter") addTodo();
                }}
              />
              <button className="addItem" onClick={addTodo}>
                Add
              </button>
            </div>
            <div className="filter-section">
              <span onClick={() => setFilter("all")} className="filter-btn">
                ✨ All({todos.length})
              </span>
              <span
                onClick={() => setFilter("completed")}
                className="filter-btn"
              >
                ✅ Completed({completedTasks})
              </span>

              <span
                onClick={() => setFilter("uncompleted")}
                className="filter-btn"
              >
                ⭕ Uncompleted({unCompletedTasks})
              </span>
            </div>
          </div>
          <br />
          <br />
          <div className="todo-list">
            {todos.length === 0 ? (
              <p>No todos yet. Add above ☝️</p>
            ) : filterTodos.length === 0 ? (
              <p>No todos. Search another filter</p>
            ) : (
              filterTodos.map((todo) => (
                <div key={todo.id} className="todos-section">
                  <div className="first-section">
                    <div className="item-check">
                      <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => toggleTodo(todo.id)}
                      />
                      <span>{todo.text}</span>
                    </div>
                  </div>
                  <div className="second-section">
                    <div className="delete-edit-section">
                      <button
                        className="edit-remove"
                        onClick={() => removeTodo(todo.id)}
                      >
                        ❌
                      </button>
                      <button
                        onClick={() => {
                          setOpenModel(true);
                          setEdit(todo.text);
                          setEditId(todo.id);
                        }}
                        className="edit-remove"
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          {openModal && (
            <div className="modal">
              <input
                value={edit}
                className="edit-modal"
                type="text"
                onChange={(e) => setEdit(e.target.value)}
              />
              <button className="edit-button" onClick={() => editTodo()}>
                Save Edit
              </button>
              <button
                className="close-button"
                onClick={() => setOpenModel(false)}
              >
                close
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
