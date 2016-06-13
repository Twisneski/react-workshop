import React from 'react';

const TodoCounter = (props) => {
  return (
    <div className="todo-counter">
      {props.todos.length} item remaining
    </div>
  )
}

export default TodoCounter;
