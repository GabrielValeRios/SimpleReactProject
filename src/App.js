import React from 'react'

import TodoItem from "./TodoItem"
import todoData from "./todoData"

// class App extends React.Component {
  
//   constructor() {
//     super()
//     this.state = {
//       todos: todoData
//     }
//   }
   
//   render() {
//     const todoItems = this.state.todos.map(it => 
//       <TodoItem
//         key={it.id}
//         data={it}
//       />
//     )
    
//     return (
//       <div>
//         {todoItems}
//       </div>
//     )
    
//   }
// }

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      counter: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1
      }
    }) 
  }

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleClick}>Add!</button>
      </div>
    )
  }
}


export default App