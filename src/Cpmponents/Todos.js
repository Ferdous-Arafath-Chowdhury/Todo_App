import React from 'react'
import Single_Todo from './Single_Todo'


const Todos = (props) => {

    console.log(props.todos)
  return (
    <div>
      {

      
        props.todos.map((todos) => <Single_Todo   todo = {todos.todo}  key={todos.id}  id={todos.id}  removetodo = {props.removetodo} />)
      }


    </div>
  )
}

export default Todos
