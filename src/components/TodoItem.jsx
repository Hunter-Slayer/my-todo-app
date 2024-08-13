

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <div className="flex justify-between items-center border-gray-300 bg-gray-100 p-4 border-b">
    <div className="flex flex-col">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="mr-2"
        />
        <span className={todo.completed ? 'line-through text-gray-500' : ''}>
          {todo.text}
        </span>
      </div>
      <div className="text-gray-600 text-sm">
        <span>Priority: {todo.priority}</span> | <span>Due: {todo.dueDate}</span> | <span>Category: {todo.category}</span>
      </div>
    </div>
    <button onClick={() => onDelete(todo.id)} className="text-red-500">
      Delete
    </button>
  </div>
);
};


export default TodoItem