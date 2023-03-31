import React,{useState} from 'react'
import AddReactionIcon from "@mui/icons-material/AddReaction";
import {
  Alert,
  Button,
  CircularProgress,
  Drawer,
  IconButton,
  LinearProgress,
  List,
  ListItemButton,
  ListItemText,
  Rating,
  Snackbar,
  Typography,
} from "@mui/material";

const DrawerMenu = () => {
    const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<number | null>(2);
  const courses = ["Reactjs", "Nodejs", "Mongodb", "Mern", "CSS"];

  return (
    <div>
        <Button variant="contained" onClick={() => setOpen(true)}>
        Open
      </Button>
      <Drawer open={open} onClose={()=>setOpen(false)}>
        <List>
            {
                courses.map(item=><ListItemButton onClick={()=>setOpen(false)}>
                    <ListItemText primary={item}/>
                </ListItemButton>)
            }
        </List>
      </Drawer>
      <br />
      <Snackbar open={true} autoHideDuration={2000}>
      <Alert severity="success">This Alert in Snackbar</Alert>
      </Snackbar>
      <br />
      <br />
      <Rating
      value={value}
      onChange={(event,value)=>setValue(value)}
      defaultValue={2} precision={0.5}  
      />

      <br />
      <br />
      <IconButton onClick={() => alert("Icon BTN")}>
        <AddReactionIcon color="secondary"/>

      </IconButton>
    </div>
  )
}

export default DrawerMenu

