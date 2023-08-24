import React from 'react'
import  style from './SingTodo.module.css'

const Single_Todo = (props) => {  

    const{title,desc} = props.todo;
    const{ id } = props;

    const handleClick = (id)=>
    {
      props.removetodo(id);
    }

   
  return (
    <div className={style.container}>
     <article>
        <div>
            <h3 className = {style.head} >
                {
                     title
                }
            </h3>
            <p className={style.pp}>
                {
                    desc
                }
            </p>

            <div className={style.flex}>
         <button  onClick={ () => 
        {
            handleClick(id)
        }}> 
           <i class="fa fa-trash-o fa-lg"></i> Delete</button>
            </div>
        </div>
        
     </article>
    </div>
  )
}

export default Single_Todo
