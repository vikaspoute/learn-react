import { useState } from 'react';
import PropTypes from 'prop-types';

const TodoForm = ({ onAddTodo }) => {
  const [todoText, setTodoText] = useState('');
  const [todoDate, setTodoDate] = useState('');

  const handleAddTodo = () => {
    if (todoText && todoDate) {
      onAddTodo({ text: todoText, date: todoDate, completed: false });
      setTodoText('');
      setTodoDate('');
    }
  };

  return (
    <div className="container text-center mb-4">
      <div className="row">
        <div className="col-md-6 mb-2 mb-md-0">
          <input
            type="text"
            className="form-control"
            placeholder="Enter todo here"
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
          />
        </div>
        <div className="col-md-3 mb-2 mb-md-0">
          <input
            type="date"
            className="form-control"
            value={todoDate}
            onChange={(e) => setTodoDate(e.target.value)}
          />
        </div>
        <div className="col-md-3">
          <button type="button" className="btn btn-primary" onClick={handleAddTodo}>
            Add Todo
          </button>
        </div>
      </div>
    </div>
  );
};

TodoForm.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
};

export default TodoForm;
