import React from 'react';
import './ListTodos.css';
import FlipMove from 'react-flip-move';

function ListTodos (props){
    const todos = props.todos;
    const listTodos = todos.map( todo => 
    { return <div className="list" key={todo.key}>
                <p>
                    <input type="text" value={todo.text} onChange={(e) => {
                        props.changeTodo(e.target.value, todo.key)
                    }}/>
                </p>
                <button className="todo-remove-button" onClick={() => {
                props.deleteTodo(todo.key)
                }}>
                    <svg viewBox="0 0 40 40">
                        <path d="M15 15 L25 25 M25 15 L15 25" />
                    </svg>
                </button>
            </div>
    }) //array prototype map
    return  <div>
                <FlipMove duration={300} easing="ease-in-out" >
                    {listTodos}
                </FlipMove>
            </div>
}
export default ListTodos