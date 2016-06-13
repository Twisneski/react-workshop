import React from 'react';
import TodoItem from './todo-item';

const TodoList = (props) => {
  return (
    <div className="todo-list">
      <TodoItem label="Learn React" />
      <TodoItem label="Learn Redux" />
    </div>
  )
}


export default TodoList;
