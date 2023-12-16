import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onDeleteTodo, onToggleComplete }) => {
  return (
    <div className="container text-center">
      {todos.length === 0 ? (
        <p>No todos yet. Add some!</p>
      ) : (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDeleteTodo={onDeleteTodo}
            onToggleComplete={onToggleComplete}
          />
        ))
      )}
    </div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
  onToggleComplete: PropTypes.func.isRequired,
};

export default TodoList;
