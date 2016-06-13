import React, { PropTypes } from 'react'

class TodoItem extends React.Component {
  render () {
    let props = this.props;
    return (
      <div className="todo-item">
        <input type="checkbox" checked={props.completed} onChange={() => {
          console.log('called itemToggle');
          props.onItemToggle(props.id);
        }}/>
        <div className="label">{props.label}</div>
        <button className="delete-btn" onClick={(e) => {
          if (confirm(`Are you sure you want to delete ${props.label}?`)) {
            props.onItemDelete(props.id);
          }
          e.preventDefault();
        }}>&times;</button>
      </div>
    )
  }
}

export default TodoItem;
