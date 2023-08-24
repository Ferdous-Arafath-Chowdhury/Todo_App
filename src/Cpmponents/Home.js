import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

import Todos from './Todos'
import style from './h.module.css'
import Create_to from './Create_to'


const Home = () => {

  // const dummy = [
  //       {
  //       id: "1",
  //       title: "todo1",
  //       des: "Title 1 descriptiongrffffffff"
  //       }
  //       ,
  //       {
  //         id: "2",
  //         title: "todo2",
  //         des: "Title 2 description  udahuahd "
  //         },
  //         {
  //           id: "3",
  //           title: "todo2",
  //           des: "Ferdous"
  //           }

  //   ]; 

  const [todos, setTodos] = useState([]);

  const handletodos = (todo) => {
    console.log(todo);

    setTodos((prev) => {
      return [...prev, { id: uuidv4(), todo }];

    });
    // const id1 = uuidv4();
    //   console.log(id1);

  };

 // Delete a todo.  [Funcrion will be called from single todo]
  const removetodo = (id) => {
    /// alert(id)
    setTodos(() => {
      const fil = todos.filter((todo) => todo.id != id);
      return fil;
    })
  }
  return (
    <>

      <div style={{
        backgroundColor:  'rgba(33, 39, 34, 1)' , height: '100vh', overflow: 'auto'
      }}>


        <div>
          <Create_to p_name={handletodos} />
        </div>
        <div className={style.container}>

          <Todos todos={todos} removetodo={removetodo} />
        </div>
      </div>
    </>
  )
}

export default Home
