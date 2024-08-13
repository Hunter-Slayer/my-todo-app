import  { useState } from "react";
import TodoItem from "./TodoItem";


const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState({
    text: "",
    priority: "Medium",
    dueDate: "",
    category: "",
  });

  const handleAddTodo = () => {
    if (newTodo.text.trim()) {
      setTodos([...todos, { id: Date.now(), ...newTodo, completed: false }]);
      setNewTodo({ text: "", priority: "Medium", dueDate: "", category: "" });
    }
  };

  const handleToggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="bg-white shadow-lg shadow-slate-400 mx-auto mt-20 p-6 rounded-lg max-w-lg">
      <h1 className="mb-6 font-bold text-2xl text-center">Todo List</h1>
      <div className="mb-4">
        <input
          type="text"
          value={newTodo.text}
          onChange={(e) => setNewTodo({ ...newTodo, text: e.target.value })}
          className="mb-2 p-2 border rounded w-full"
          placeholder="New todo"
        />
        <select
          value={newTodo.priority}
          onChange={(e) => setNewTodo({ ...newTodo, priority: e.target.value })}
          className="mb-2 p-2 border rounded w-full"
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <input
          type="date"
          value={newTodo.dueDate}
          onChange={(e) => setNewTodo({ ...newTodo, dueDate: e.target.value })}
          className="mb-2 p-2 border rounded w-full"
        />
        <input
          type="text"
          value={newTodo.category}
          onChange={(e) => setNewTodo({ ...newTodo, category: e.target.value })}
          className="mb-2 p-2 border rounded w-full"
          placeholder="Category"
        />
        <button
          onClick={handleAddTodo}
          className="bg-blue-500 p-2 rounded w-full text-white"
        >
          Add Todo
        </button>
      </div>
      <div>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={handleToggleTodo}
            onDelete={handleDeleteTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
