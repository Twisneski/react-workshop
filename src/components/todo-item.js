import React, { PropTypes } from 'react'

class TodoItem extends React.Component {
  render () {
    let props = this.props;
    return (
      <div className="todo-item">
        <input type="checkbox" />
        <div className="label">{props.label}</div>
        <button className="delete-btn">&times;</button>
      </div>
    )
  }
}

export default TodoItem;
