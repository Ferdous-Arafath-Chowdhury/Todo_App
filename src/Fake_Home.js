import React from 'react'
import Fake_Todos from './Cpmponents/Fake_Todos';
import Fake_Create_todo from './Fake_Create_todo';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

const Fake_Home = () => {

    const [todos,setTodos] = useState([]);

    // const dummy = [
    //     {
    //         id: "1",
    //         title: "todo1",
    //         des: "Title 1 descriptiongrffffffff"
    //     }
    //     ,
    //     {
    //         id: "2",
    //         title: "todo2",
    //         des: "Title 2 description  udahuahd "
    //     },
    //     {
    //         id: "3",
    //         title: "todo2",
    //         des: "Ferdous"
    //     }

    // ]; 

    const handletodo = (todo) => 
    {
       //console.log(todo);
       setTodos((oldtodo) => 
       {
        return [...oldtodo , { id: uuidv4() , todo}];
       })
    };

    return (
        <div>
          <Fake_Create_todo  handleadd = {handletodo}/>
            <Fake_Todos todos = {todos}/>
        </div>
    )
}

export default Fake_Home
