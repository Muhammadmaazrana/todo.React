import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Child from './component/Child'




class APP extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: [],
      value:''
    }

  }

delete_all=()=>{
  this.setState({
    todos:[]
  })
}

  delete_todo = (i) => {
    this.state.todos.splice(i,1)
    this.setState({
      todos:this.state.todos
    })
  }
  add_todo = () => {
    this.setState({
      todos: [...this.state.todos, this.state.value],
      value: ''
    })
  }
  render() {
    return (
      <div>

        <input type="text" value={this.state.value} onChange={(e) => this.setState({ value: e.target.value })} placeholder='enter value' />
        <button onClick={this.delete_all}>DeleteAll</button>
        <button onClick={this.add_todo}>ADD ITEM</button><ul>
          {this.state.todos.map((v, i) => {
            return <li key={i}>{v}
              <button onClick={() => this.delete_todo(i)}>delete</button>
            </li>
          })}
        </ul>
      </div>
    )
  }
}



export default APP;
