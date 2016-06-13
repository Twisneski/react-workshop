import React from 'react';
import AddTodo from './add-todo';
import TodoItem from './todo-item';
/*
There are a few ways you can write a component.
Especially if that component does not have any state and only accepts props.
1. Stateless Component Function
2. Stateless Component with Arrow Function
3. ES6 Class Syntax
4. ES5 Psuedo Class Syntax
*/


//We'll use the  Stateless Component using Arrow Functions Method for now.
const TodoApp = (props) => {
  return (
    <div className="todo-app">
      <AddTodo placeholder="What do you want to be done?" />
      <TodoItem label="Learn React" />
      <TodoItem label="Learn Redux" />
    </div>
  )
};

export default TodoApp;
