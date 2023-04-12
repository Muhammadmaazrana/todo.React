import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';





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
  edit=(i)=>{
var update=prompt("Edit");
this.state.todos[i]=update;
this.setState({
  todos:this.state.todos
})
  }
  render() {
    return (
      <div className='main'>

        <input type="text" className='input' value={this.state.value} onChange={(e) => this.setState({ value: e.target.value })} placeholder='enter value' />
        <button type="button" class="btn btn-success" onClick={this.add_todo}>ADD ITEM</button>
        <button  type="button" class="btn btn-danger" onClick={this.delete_all}>DeleteAll</button>
      
      <ul><br />
          {this.state.todos.map((v, i) => {
            return  <li  key={i}>{v} <br /><br />
            <button type="button" class="btn btn-outline-success" onClick={()=>this.edit(i)}>Edit</button>
              <button type="button" class="btn btn-outline-danger" onClick={() => this.delete_todo(i)}>delete</button><hr />
            </li>
          })}
        </ul>
      </div>
    )
  }
}



export default APP;
