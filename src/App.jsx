import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import TextField from '@mui/material/TextField';







class APP extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: [],
      value: ''
    }

  }

  add_todo = () => {
    // let obj={titile:this.state.value};

    // firebase.database().ref('/').child("todos").push(obj)

    this.setState({
      todos: [...this.state.todos, this.state.value],
      value: ''
    })
  }

  delete_all = () => {
    this.setState({
      todos: [],
      value: ''
    })
  }

  delete_todo = (i) => {
    this.state.todos.splice(i, 1)
    this.setState({
      todos: this.state.todos
    })
  }

  edit = (i) => {
    var update = prompt("Edit");
    this.state.todos[i] = update;
    this.setState({
      todos: this.state.todos
    })
  }
  render() {
    return (
      <div className='main'>
          <h1>TODO APP</h1><br />
          <TextField type="text" id="outlined-basic" label="Enter What to do!" variant="outlined" value={this.state.value} onChange={(e) => this.setState({ value: e.target.value })}  />
         {/* <input type="text" className='input' value={this.state.value} onChange={(e) => this.setState({ value: e.target.value })} placeholder='enter value' /><br /><br />  */}
      <br /><br /> <br /> <button type="button" className="btn btn-success" onClick={this.add_todo}>ADD</button>
        <button type="button" className="btn btn-danger" onClick={this.delete_all}>DeleteAll</button>

        <ul><br />
          {this.state.todos.map((v, i) => {
            return <li key={i}>{v} <br /><br />
              <button type="button" className="btn btn-outline-success" onClick={() => this.edit(i)}>Edit</button>
              <button type="button" className="btn btn-outline-danger" onClick={() => this.delete_todo(i)}>delete</button><hr />
            </li>
          })}
        </ul>
      </div>
    )
  }
}



export default APP;
