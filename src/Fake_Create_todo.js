import React, { useState } from 'react'

const Fake_Create_todo = (props) => {   

    const [todo,setTodo] = useState({title: "" ,des: ""});

   const handleSubmit = (event) => 
   {
      event.preventDefault();
      //console.log(todo);
      props.handleadd(todo);
   }

   const handleChange = (event) => 
   {
      setTodo((oldTodo) => 
      {
        const name = event .target.name;
        return {...oldTodo , [name]: event.target.value};
      })
   }


  return (
    <div>
      <form action="" onSubmit={handleSubmit}> 
      <label htmlFor=""> Title </label>
   <input type="text" onChange={handleChange} value={todo.title}  id ="title" name = "title" />
   <label htmlFor="">Des</label> 

   <input type="text" onChange={handleChange} value={todo.des}  id ="des" name = "des" /> 

   <button type='submit'>Add todo</button>
      </form>
    </div>
  )
}

export default Fake_Create_todo
