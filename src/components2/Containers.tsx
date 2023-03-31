import React from 'react'
import { Container,Typography } from '@mui/material'

const Containers = () => {
  return (
    <div>
      <Container sx={{ background: "yellow" }} maxWidth="xs">
        <Typography variant="body2">This is Xs</Typography>
      </Container>
      <Container sx={{background:'orange'}} maxWidth="md">
        <Typography variant="body1">This is MD</Typography>
      </Container>
    </div>
  )
}

export default Containers
