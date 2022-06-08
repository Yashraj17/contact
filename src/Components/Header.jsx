import { AppBar, Toolbar, Typography,Avatar, } from '@mui/material'
import React from 'react'
const Header = () => {
  return (
    <AppBar position='static'>
        <Toolbar>
            <Typography varient='h6'>Contacts</Typography>
        </Toolbar>
    </AppBar>
  )
}

export default Header