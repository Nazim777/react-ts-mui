import React,{useState} from 'react'
import {
    TextField,
    Button,
    FormGroup,
    FormControlLabel,
    Checkbox,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    FormLabel,
    RadioGroup,
    Radio,
  } from "@mui/material";

  type inputsType = {
    name:string,
    email:string,
    password:number | string ,
    terms:boolean,
    courses:string,
    gender:string
  }
const Form = () => {

    const [inputs, setInputs] = useState<inputsType>({
        name: "",
        email: "",
        password: "",
        terms: false,
        courses: "",
        gender: "",
      });
const handleSubmit = (event:React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault()
    console.log(inputs)

}

const handleChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
    setInputs({
        ...inputs,
        [event.target.name]:event.target.value
    })

}
  return (
    <div>
        <form onSubmit={handleSubmit} >
        <TextField
          name="name"
          value={inputs.name}
          onChange={handleChange}
          placeholder="enter name"
          type="text"
          variant="outlined"
          sx={{ margin: "20px" }}
        />
        <br />
        <TextField
          name="email"
          value={inputs.email}
          onChange={handleChange}
          placeholder="enter email"
          type="email"
          variant="outlined"
          sx={{ margin: "20px" }}
        />
        <br />
        <TextField
          value={inputs.password}
          onChange={handleChange}
          name="password"
          placeholder="enter password"
          type="password"
          variant="outlined"
          sx={{ margin: "20px" }}
        />
        <br />
        <FormGroup sx={{ margin: "20px" }}>
            <FormControlLabel
            label="I Agree T&C"
            control={
            <Checkbox
            onChange={()=>{
                setInputs({...inputs,terms:!inputs.terms})
            }}
            />}
            />
        </FormGroup>
        <br />
        <FormControl sx={{width:'200px'}}>
            <InputLabel id='menu'>Courses</InputLabel>
            <Select
             label="courses"
             value={inputs.courses}
             onChange={(event)=>{
                setInputs({
                    ...inputs,
                    [event.target.name]: event.target.value
                })
             }}
             name='courses' 
            >
            <MenuItem value={"mongodb"}>Mongodb</MenuItem>
            <MenuItem value={"express"}>Express</MenuItem>
            <MenuItem value={"node"}>Node</MenuItem>
            <MenuItem value={"react"}>React</MenuItem>

            </Select>
        </FormControl>
        <br />
        <br />
        <FormControl>
            <FormLabel>Gender</FormLabel>
            <RadioGroup name="gender" onChange={handleChange}>
            <FormControlLabel value={"male"} label="Male" control={<Radio />}/>
            <FormControlLabel value={"female"} label="Female" control={<Radio />}/>
            <FormControlLabel value={"other"} label="Other" control={<Radio />}/>
            </RadioGroup>
            
        </FormControl>
        <br />
        <Button type="submit" variant='contained'>Submit</Button>

        </form>
      
    </div>
  )
}

export default Form
