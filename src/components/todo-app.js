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

    // our default starting state.
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
    this.onAdd = this.onAdd.bind(this);
    this.onItemEdit = this.onItemEdit.bind(this);
    this.onItemDelete = this.onItemDelete.bind(this);
    this.onItemToggle = this.onItemToggle.bind(this);
  }

  render () {
    let { todos, filter } = this.state;

    return (
      <div className="todo-app">
        <AddTodo onAdd={this.onAdd} placeholder="What do you want to be done?" />
        <TodoList todos={todos}
                  filter={filter}
                  onItemToggle={this.onItemToggle}
                  onItemEdit={this.onItemEdit}
                  onItemDelete={this.onItemDelete} />
        <TodoCounter todos={todos} />
        <TodoFilter onFilterClick={this.onFilterClick}/>
      </div>
    );
  }

  onAdd(todo) {
    let todos = this.state.todos;

    // increment our id before we save
    todo.id = todos.length + 1;

    // take our current todos, and push our new todo onto the list
    this.setState({
      todos: [
        todo,
        ...todos
      ]
    });
  }

  onItemEdit(itemId, text) {
    let todos = this.state.todos.map(function (todo) {
			return todo.id !== itemId ? todo : Object.assign({}, todo, {label: text});
		});

    this.setState({
      todos: todos
    });
  }

  onItemDelete(itemId) {
    let todos = this.state.todos.filter(function (todo) {
			return todo.id !== itemId;
		});

    this.setState({
      todos: todos
    });
  }

  onItemToggle(itemId) {
    let todos = this.state.todos.map(function (todo) {
			return todo.id !== itemId ?
				todo : Object.assign({}, todo, {completed: !todo.completed});
		});

    this.setState({
      todos: todos
    });
  }

  onFilterClick(filter) {
    this.setState({
      filter: filter
    });
  }
}

export default TodoApp;
