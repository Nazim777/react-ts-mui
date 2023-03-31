import React,{useState} from 'react';
import './App.css';
import CreateTod from './components/CreateTod';
import { Todo } from './models';
import AllTodo from './components/AllTodo';



function App() {
 

  const [todo,setTodo] = useState<Todo>({
    id:Date.now()* Math.random()*10,
    name:'',
    email:'',
    password:'',
    isCompleted:false
  })
const [allTodos,setAllTodos] = useState<Todo[]>([])

const handleDelete = (id:any)=>{ 
  setAllTodos([...allTodos.filter(item=>item.id!==id)])
}




  return (
    <div className="App">
      <h1>hello this is a home page</h1>
      <CreateTod todo={todo} setTodo={setTodo} allTodos= {allTodos} setAllTodos={setAllTodos} />
      <AllTodo allTodos={allTodos} setAllTodos = {setAllTodos} handleDelete = {handleDelete}/>
    </div>
  );
}

export default App;
