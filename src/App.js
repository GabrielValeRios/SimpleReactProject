import React from "react";

import TodoItem from "./TodoItem";
import todoData from "./todoData";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todoData,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    this.setState((prevState) => {
      const updatedTodos = prevState.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return {
        todos: updatedTodos,
      };
    });
  }

  render() {
    const todoItems = this.state.todos.map((it) => (
      <TodoItem key={it.id} data={it} handleChange={this.handleClick} />
    ));

    return <div>{todoItems}</div>;
  }
}

export default App;

// // ========================= LIFE CYCLE ==================================================

// // When mount (born to the screen, runs once, Ex.: Fetch data)
// componentDidMount() {}

// // Receiveing props from parent. Run everytime
// // parent component change props passed
// // DEPRECATED
// componentWillReceiveProps(nextProps)

// // Decide if component updates based on incoming props and incoming state
// shouldComponentUpdate(nextProps, nextState) // returns true or false

// // Umnount/disappear component from screen. Remove things you set on
// // {@method componentDidMount}
// componentWillUnmount()

// // Render components everytime something changes
// render()

// // returns the new updated state based upon props
// // read before use! Rare cases
// static getDerivedStateStateFromProps(props, state)

// // Create backup of the current way things are
// getSnapshotBeforeUpdate()
