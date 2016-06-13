import React from 'react';
import AddTodo from './add-todo';
import TodoList from './todo-list';
/*
There are a few ways you can write a component.
Especially if that component does not have any state and only accepts props.
1. Stateless Component Function
2. Stateless Component with Arrow Function
3. ES6 Class Syntax
4. ES5 Psuedo Class Syntax
*/

const TODOS = [
  {id: 1, label: 'Learn React', completed: false},
  {id: 2, label: 'Learn Redux', completed: false}
];

//We'll use the  Stateless Component using Arrow Functions Method for now.
const TodoApp = (props) => {
  return (
    <div className="todo-app">
      <AddTodo placeholder="What do you want to be done?" />
      <TodoList todos={TODOS}/>
    </div>
  )
};

export default TodoApp;
