import React from 'react'
import { useState } from 'react';
import AddTodoForm from './AddTodoForm';

function TodoList() {
    const [todos, setTodos] = useState([
        {id: 1, title: "finish up ALX task", description: "this week wrap up with ALX"}, 
        {id: 2, title: "my quiet time", description: "spend time pray, study rhapsody and take your affirmations"}, 
        {id: 3, title: "prepare to teach Fatima", description: "get ready to leave  early"}, 
    ])

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id) )
    }

    const addTodo = (todo) => {
        setTodos([...todos, {...todo, id: todos.length + 1}])
    }

  return (
    <div>
       <h1>My Daily To-do List</h1>
       <ul>
        {todos.map((todo) => (
            <li key={todo.id}>
                <p>{todo.title}</p>
                <p>{todo.description}</p>
                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </li>
        ))}
       </ul>
       <AddTodoForm onSubmit={addTodo} />
    </div>
  )
}

export default TodoList;