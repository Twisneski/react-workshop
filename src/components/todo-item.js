import React, { PropTypes } from 'react'

class TodoItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false
    };
  }
  render () {
    let props = this.props;

    let label = (
      <div className="label" onDoubleClick={() => {
          this.setState({editing: true});
        }}>{props.label}</div>
      );

    if (this.state.editing) {
        label = <input type="text" defaultValue={props.label} onBlur={(e) => {
          let text = e.target.value;
          if (!text) {
            e.targer.value = props.label;
          }
          props.onItemEdit(props.id, text); 
          this.setState({editing: false});
        }}/>
    }

    return (
      <div className="todo-item">
        <input type="checkbox" checked={props.completed} onChange={() => {
          props.onItemToggle(props.id);
        }}/>

        {label}

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
