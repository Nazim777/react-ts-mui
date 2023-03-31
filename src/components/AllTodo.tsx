import React from 'react'
import { Todo } from '../models';
import Cards from './Cards';

type propType ={
  allTodos:Todo[],
  handleDelete: (id: any) => void,
  setAllTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}
const AllTodo = ({allTodos,handleDelete,setAllTodos}:propType) => {
  return (
    <div style={{display:'flex',flexWrap:'wrap'}}>
      {
        allTodos&& allTodos.map(item=><Cards item={item} key={item.id} handleDelete={handleDelete} allTodos={allTodos} setAllTodos ={setAllTodos}/>)
      }
     
    </div>
  )
}

export default AllTodo
