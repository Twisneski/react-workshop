import React from 'react';
import AddTodo from './add-todo';
import TodoList from './todo-list';
import TodoCounter from './todo-counter';
import TodoFilter from './todo-filter';

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

// Our App has evolved enough now, that we are needing state.
// We should convert our stateless component over to a ES6 Class Component
class TodoApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {id: 1, label: 'Learn React', completed: false},
        {id: 2, label: 'Learn Redux', completed: false}
      ],

      filter: 'all'
    };

    // This binds the context (`this` keyword) to this instance of TodoApp,
    // So that when TodoFilter uses our callback, we will reference the correct component.
    this.onFilterClick = this.onFilterClick.bind(this);
  }

  render () {
    let { todos, filter } = this.state;

    return (
      <div className="todo-app">
        <AddTodo placeholder="What do you want to be done?" />
        <TodoList todos={todos} filter={filter}/>
        <TodoCounter todos={todos} />
        <TodoFilter onFilterClick={this.onFilterClick}/>
      </div>
    );
  }

  onFilterClick(filter) {
    this.setState({
      filter: filter
    });
  }
}

export default TodoApp;
