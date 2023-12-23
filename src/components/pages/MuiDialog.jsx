import React, { useState } from 'react'
import {Dialog, Button, DialogTitle, 
  DialogContentText, DialogActions, 
  DialogContent, TextField,Modal
} from '@mui/material'

export const MuiDialog = () => {
    const [open,setOpen] = useState(false)
  return (
    <>
    <Button onClick={() => setOpen(true)}>Open Dialog</Button>
     <Dialog
     open={open}
     onClose={() => setOpen(false)}
     aria-labelledby='dialog-title'
     aria-describedby='dialog-description'
     >
        <DialogTitle id = 'dialog-title'>Submit the Test?</DialogTitle>
      <DialogContent fullwidth>
        <DialogContentText id = 'dialog-description'>
           Are you sure you wantto sumbit ?
        </DialogContentText>
        <TextField>User Name</TextField>
      </DialogContent >
      <DialogActions>
        <Button onClick={() => setOpen(false)}>Cancel</Button>
        <Button autoFocus onClick={() => setOpen(false)}>Submit</Button>
      </DialogActions>
      </Dialog>
    </>
  )
}

export default MuiDialog;

