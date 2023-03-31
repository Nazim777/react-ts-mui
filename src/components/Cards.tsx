import React, { useState } from 'react'
import UpdateTodo from './UpdateTodo';
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Typography,
  } from "@mui/material";
import { Todo } from '../models';

type propType ={
    item:Todo,
    handleDelete: (id: any) => void,
    allTodos:Todo[],
    setAllTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}
const Cards = ({item,handleDelete,allTodos,setAllTodos}:propType) => {

    const [open,setOpen] = useState<boolean>(false)
    const [open2,setOpen2] = useState<boolean>(false)
    const [updateTodo,setUpdateTodo] = useState<Todo>({
      id:Date.now()* Math.random()*2,
      name:'',
      email:'',
      password:'',
      isCompleted:false
    })
    const handleEdit = ()=>{
      if(updateTodo){
        setAllTodos(allTodos.map(item=>item.id===updateTodo.id?{...updateTodo}:item))
        setUpdateTodo({
          id:Date.now()* Math.random()*2,
          name:'',
          email:'',
          password:'',
          isCompleted:false
        })
        setOpen2(false)
      }
    }
  return (
    <div>
        <Card sx={{ maxWidth: 300, marginLeft: 5 }}>
        <CardMedia
          component="img"
          height="140"
          width='200'
          image="https://images.unsplash.com/photo-1661956602153-23384936a1d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="test image"
        />
        <CardContent>
            <Typography variant="h5">
                {item.name}
            </Typography>
            <Typography variant="h5">
                {item.email}
            </Typography>
            <Typography variant="h5">
                {item.password}
            </Typography>
        </CardContent>
        <CardActions>
        <Button size="small" color="primary" onClick={()=>{
          setOpen2(true)
          const todo = allTodos.find(todo=>todo.id==item.id)
          if(todo){
            setUpdateTodo(todo)
          }
        }}>
           Edit
          </Button>
          <Button size="small" color="primary" onClick={() => setOpen(true)}>
            Delete
          </Button>
        </CardActions>
        </Card>
        <Dialog open={open} onClose={()=>setOpen(false)}>
          <DialogTitle>
            Are You Sure?
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              are you sure you want to delete this todo?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={()=>setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={()=>handleDelete(item.id)}>
              Delete
            </Button>
          </DialogActions>
          
        </Dialog>

        <Dialog open={open2} onClose={()=>setOpen2(false) }>
          <DialogTitle>
            Are You Sure?
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              are you sure you want to edit this todo?
            </DialogContentText>
            <UpdateTodo updateTodo={updateTodo} setUpdateTodo={setUpdateTodo}/>
           
          </DialogContent>
          <DialogActions>
            <Button onClick={()=>setOpen2(false)}>
              Cancel
            </Button>
            <Button onClick={handleEdit}>
             Update
            </Button>
          </DialogActions>
          
        </Dialog>
        
      
    </div>
  )
}

export default Cards

