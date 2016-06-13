import React from 'react';

const AddTodo = (props) => {
    return (
      <div className="add-todo">
        <input type="text" placeholder={props.placeholder} />
      </div>
    )
}

export default AddTodo;
