import React from 'react';
const ENTER_KEY = 13;
const AddTodo = (props) => {
    return (
      <div className="add-todo">
        <input type="text" placeholder={props.placeholder} onKeyPress={(e) => {
          if (e.charCode === ENTER_KEY) {
            props.onAdd({
              label: e.target.value,
              completed: false
            });

            e.target.value = '';
          }
        }}/>
      </div>
    )
}

export default AddTodo;
