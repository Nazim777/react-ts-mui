import React,{useState} from 'react'
import { Accordion,AccordionSummary,AccordionDetails,TextField,Typography,Autocomplete } from '@mui/material'
const Accord = () => {
    const courses = ["react", "nodejs", "mern", "nextjs", "UI"];
    const [course,setCourse] = useState<string>()
    //  let  handleChange : (event: React.SyntheticEvent, value: string, reason: string) => void
   let  handleChange = (event:React.SyntheticEvent,value:string)=>{
       setCourse(value)
    }

    // console.log(course)
  return (
    <div>
       <Accordion>
        <AccordionSummary>
            <Typography>What is MERN Stack?</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum assumenda quidem sit nobis, neque fugiat impedit laudantium rem nulla non.</Typography>
        </AccordionDetails>
       </Accordion>

      <Autocomplete  onInputChange={handleChange} sx={{width:200}} options={courses} renderInput={(params)=><TextField {...params} label='select a course'/>}/>
    </div>
  )
}

export default Accord
