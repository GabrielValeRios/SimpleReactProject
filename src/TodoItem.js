import React from "react";

function TodoItem(props) {
  return (
    <div>
      <input
        type="checkbox"
        checked={props.data.completed}
        onChange={() => props.handleChange(props.data.id)}
      />
      <p>{props.data.text}</p>
    </div>
  );
}

export default TodoItem;
