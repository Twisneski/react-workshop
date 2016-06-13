import React from 'react';
import TodoItem from './todo-item';

const TodoList = (props) => {
  let todos = props.todos.filter((todo) => {
      if (props.filter === 'active') {
        return !todo.completed
      } else if (props.filter === 'completed') {
        return todo.completed
      } else {
        return true;
      }
  });

  return (
    <div className="todo-list">
      {
        todos.map((todo) => {
          return <TodoItem key={todo.id} label={todo.label} />
        })
      }
    </div>
  )
}


export default TodoList;
