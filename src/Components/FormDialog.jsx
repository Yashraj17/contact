import React, { useState } from 'react'
import {Dialog,DialogActions,DialogTitle,DialogContent,DialogContentText,Button,Box,Stack,TextField} from '@mui/material';

const FormDialog = ({open,setOpen,data,setData})=>{
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [contact,setContact] = useState('');
    

    const handleClose = () => {
      setOpen(false);
    };

    const handleSubmit = ()=>{
        setData((item)=>([...item,{id:data.length+1,name:name,email:email,contact:contact}]));
        setOpen(false);
        setName('');
        setEmail('');
        setContact('');
    }
    console.log('this is data',data);
    return(
      <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"Create New Contact"}
      </DialogTitle>
      <DialogContent>
      {/* <Box sx={{ width: '100%' }}> */}
      <Stack spacing={2} padding={1} >
            <TextField fullWidth label="Name" value={name} onChange={(e)=>setName(e.target.value)} size='small' id="fullWidth" />
            <TextField fullWidth label="Contact" value={contact} onChange={(e)=>setContact(e.target.value)}  type='number' size='small' id="fullWidth" />
            <TextField fullWidth label="Email" value={email} onChange={(e)=>setEmail(e.target.value)} type='email'  size='small' id="fullWidth" />
      </Stack>
    {/* </Box> */}
      </DialogContent>
      <DialogActions>
        <Button variant='contained' size='small' color='success' onClick={()=>handleSubmit()}>submit</Button>
        <Button variant='contained' color='error' size='small' onClick={()=>setOpen(false)}>Cancel</Button>
      </DialogActions>
    </Dialog>
    )
  }

export default FormDialog