import React from 'react';
import './App.css';
import ListTodos from './ListTodos'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      todos: [],
      currentTodo: {
        text: '',
        key:'',
        completed: false,
      }
    }
    this.handleInput = this.handleInput.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.changeTodo = this.changeTodo.bind(this);
  }

  handleInput(e){
    this.setState({
      currentTodo:{
        text: e.target.value,
        key:Date.now()
      }
    })
  }

  addTodo(e){
    e.preventDefault();
    const newTodo = this.state.currentTodo;
    console.log(newTodo);
    if (newTodo.text !== ""){
      const todos = [ ...this.state.todos, newTodo ]; //Destructuring Assignment
      this.setState({
        todos: todos,
        currentTodo: {
          text: '',
          key:'',
          completed: false,
        }
      });
      console.log(todos);
    }
  }

  deleteTodo(key){
    const filteredTodos = this.state.todos.filter( todo => todo.key !== key);
    this.setState({
      todos: filteredTodos
    });
  }

  changeTodo(newText, key) {
    const todos = this.state.todos;
    todos.map(todo =>{
      console.log("todos.key:"+ todo.key);
      if(todo.key === key){
        console.log(todo.key + "" +key)
        todo.text = newText;
      }
      return null;
    })
    this.setState({
      todos: todos
    })
  }

  render(){
  return (
    <div className="todolist-title">
      <h1>To do list</h1>
      <div className="app">
        <form id="todo-form" onSubmit={this.addTodo}>
          <div className="todo-input">
            <input type="text" placeholder="Enter your todo" value={this.state.currentTodo.text} onChange={this.handleInput} />
            <button className="todo-add-button" type="submit">
              <svg viewBox="0 0 40 40">
                <path d="M10 20 L30 20 M20 10 L20 30" />
              </svg>
            </button>
          </div>
        </form>
        <ListTodos todos={this.state.todos} deleteTodo={this.deleteTodo} changeTodo={this.changeTodo}></ListTodos>
      </div>
    </div>
  );}
}

export default App;