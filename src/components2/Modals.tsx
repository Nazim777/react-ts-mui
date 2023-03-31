import React,{useState} from 'react'
import { Modal, Button, Box, Typography, Link } from "@mui/material";
const Modals = () => {
    const [open,setOpen] = useState<boolean>(false)
  return (
    <div>
        <Button onClick={()=>setOpen(true)}>Open Modal</Button>
        <Modal open={open} onClose={()=>setOpen(false)}>
        <Box position="absolute" top="50%" left="50%">
            <Typography>This is Modal</Typography>
            <Button variant='contained' onClick={()=>setOpen(false)}>Cancel</Button>

        </Box>

        </Modal>
        
      
    </div>
  )
}

export default Modals
