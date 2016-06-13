import React from 'react';
/*
There are a few ways you can write a component.
Especially if that component does not have any state and only accepts props.
1. Stateless Component Function
2. Stateless Component with Arrow Function
3. ES6 Class Syntax
4. ES5 Psuedo Class Syntax
*/


// // Stateless Component
// function TodoApp(props) {
//   return (
//     <div className="todo-app">
//       Todo app.
//     </div>
//   )
// }
//
// Stateless Component using Arrow Functions
const TodoApp = (props) => {
  return (
    <div className="todo-app">
      Todo app.
    </div>
  )
};
//
// // ES6 Class Syntax
// class TodoApp extends React.Component {
//   render() {
//     return (
//       <div className="todo-app">
//         Todo app.
//       </div>
//     )
//   }
// }

// ES5 Syntax
// var TodoApp = React.createClass({
//   render(){
//     return (
//       <div className="todo-app">
//         Todo app.
//       </div>
//     )
//   }
// });



export default TodoApp;
