import React, { useState } from 'react'
import  st1 from './Create.module.css'

const Create_to = (props) => {

  const [todo,setTodo] =  useState({title: " " ,desc : " "});
  const handleChange = (event) => 
  {
    const name = event.target.name;
    setTodo((Old) => 
    {
      return {
        ...Old,[name]: event.target.value
     
      }
    })

  } ;

  const handleSubmit = (event) =>
  {
    event.preventDefault();
    console.log(todo); 
    setTodo({title:" ",desc: " "});
    props.p_name(todo);
  };
  return ( 
 <form action="" className={st1.container} onSubmit={handleSubmit}>
     <h4>Make Todo</h4>
    <label htmlFor="">Title</label>
    <input type="text" id = "title"  name = "title" value={todo.title} onChange={handleChange} />
    <label htmlFor="">Description</label>

    <textarea name="desc" id="desc" cols="30" rows="10" value = {todo.desc} onChange={handleChange}></textarea>
    <button  className={st1.btn}type='submit'>Submit</button>
 </form>
  )
}


export default Create_to
