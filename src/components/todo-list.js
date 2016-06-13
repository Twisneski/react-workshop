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
          return <TodoItem key={todo.id}
                           id={todo.id}
                           label={todo.label}
                           completed={todo.completed}
                           onItemToggle={props.onItemToggle}
                           onItemEdit={props.onItemEdit}
                           onItemDelete={props.onItemDelete} />
        })
      }
    </div>
  )
}


export default TodoList;
