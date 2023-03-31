import { TextField,Button } from '@mui/material'
import React,{useState} from 'react'
import { Todo } from '../models'

type propType ={
todo:Todo
setTodo:React.Dispatch<React.SetStateAction<Todo>>,
allTodos:Todo[],
setAllTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}
const CreateTod = ({todo,setTodo,allTodos,setAllTodos}:propType) => {
    const handleChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
        setTodo({
            ...todo,
            [event.target.name]:event.target.value
        })
    }
    const hanldeSubmit = (event:React.FormEvent<HTMLFormElement>)=>{
      event.preventDefault()
      setAllTodos([...allTodos,todo])
      setTodo({
        id:'',
        email:'',
        name:'',
        password:'',
      })
    }
  return (
    <div>
      <form onSubmit={hanldeSubmit}>
      <TextField
          name="name"
          value={todo.name}
          onChange={handleChange}
          placeholder="enter name"
          type="text"
          variant="outlined"
          sx={{ margin: "20px" }}
        />
        <br />
        <TextField
          name="email"
          value={todo.email}
          onChange={handleChange}
          placeholder="enter email"
          type="email"
          variant="outlined"
          sx={{ margin: "20px" }}
        />
        <br />
        <TextField
          value={todo.password}
          onChange={handleChange}
          name="password"
          placeholder="enter password"
          type="password"
          variant="outlined"
          sx={{ margin: "20px" }}
        />
        <br />
        <Button type='submit' variant="contained" color="success">Add</Button>
      </form>
    </div>
  )
}

export default CreateTod
