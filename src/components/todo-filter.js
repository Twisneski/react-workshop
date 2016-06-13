import React from 'react';

const TodoFilter = (props) => {
  return (
    <div className="todo-filter">
      <button onClick={(e) => {
        props.onFilterClick('all');
        e.preventDefault();
      }}>All</button>
      <button onClick={(e) => {
        props.onFilterClick('active');
        e.preventDefault();
      }}>Active</button>
      <button onClick={(e) => {
        props.onFilterClick('completed');
        e.preventDefault();
      }}>Completed</button>
    </div>
  )
}

export default TodoFilter;
