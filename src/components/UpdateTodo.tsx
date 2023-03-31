import { TextField,Button } from '@mui/material'
import React,{useState} from 'react'
import { Todo } from '../models'

type propType ={
    updateTodo:Todo
    setUpdateTodo:React.Dispatch<React.SetStateAction<Todo>>
}
const UpdateTodo = ({updateTodo,setUpdateTodo}:propType) => {
    const handleChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
        setUpdateTodo({
            ...updateTodo,
            [event.target.name]:event.target.value
        })
    }
   
  return (
    <div>
      <form>
      <TextField
          name="name"
          value={updateTodo.name}
          onChange={handleChange}
          placeholder="enter name"
          type="text"
          variant="outlined"
          sx={{ margin: "20px" }}
        />
        <br />
        <TextField
          name="email"
          value={updateTodo.email}
          onChange={handleChange}
          placeholder="enter email"
          type="email"
          variant="outlined"
          sx={{ margin: "20px" }}
        />
        <br />
        <TextField
          value={updateTodo.password}
          onChange={handleChange}
          name="password"
          placeholder="enter password"
          type="password"
          variant="outlined"
          sx={{ margin: "20px" }}
        />
      </form>
    </div>
  )
}

export default UpdateTodo
