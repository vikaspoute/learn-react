import PropTypes from 'prop-types';

const TodoItem = ({ todo, onDeleteTodo, onToggleComplete }) => {
  return (
    <div className="row align-items-center mb-2">
      <div className="col-md-6">
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id={`checkbox-${todo.id}`}
            checked={todo.completed}
            onChange={() => onToggleComplete(todo.id)}
          />
          <label className="form-check-label" htmlFor={`checkbox-${todo.id}`}>
            <strong className={todo.completed ? 'text-muted' : ''}>{todo.text}</strong>
          </label>
        </div>
      </div>
      <div className="col-md-3">{todo.date}</div>
      <div className="col-md-3">
        <button type="button" className="btn btn-danger" onClick={() => onDeleteTodo(todo.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
  onToggleComplete: PropTypes.func.isRequired,
};

export default TodoItem;
