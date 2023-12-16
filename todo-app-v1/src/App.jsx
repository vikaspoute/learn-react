// App.jsx
import { useState } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const App = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, { ...newTodo, id: Date.now() }]);
  };

  const handleDeleteTodo = (todoId) => {
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(updatedTodos);
  };

  const handleToggleComplete = (todoId) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-container">
      <Header />
      <TodoForm onAddTodo={handleAddTodo} />
      <TodoList
        todos={todos}
        onDeleteTodo={handleDeleteTodo}
        onToggleComplete={handleToggleComplete}
      />
    </div>
  );
};

export default App;
