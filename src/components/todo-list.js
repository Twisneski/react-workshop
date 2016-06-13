import React from 'react';
import TodoItem from './todo-item';

const TodoList = (props) => {
  return (
    <div className="todo-list">
      {
        props.todos.map((todo) => {
          return <TodoItem key={todo.id} label={todo.label} />
        })
      }
    </div>
  )
}


export default TodoList;
