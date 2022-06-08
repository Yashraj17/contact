import {Table, TableCell, TableRow,TableHead,TableBody,Avatar,Typography,Paper, TableContainer } from '@mui/material'
import React, { useEffect, useState } from 'react'
import contactData from '../Data/contactData'

const TableData = (props)=>{
    return(
        <>
            <TableCell sx={{flexDirection:'row',display:'flex'}}> 
            <Avatar alt="Remy Sharp"  sx={{ width: 28, height: 28,bottom:5,marginRight:5 }} src="https://i.pinimg.com/736x/2c/cc/d4/2cccd4fefb43fe092e2a16ee585d5047.jpg" /> 
           {props.name}
            </TableCell>
            <TableCell>{props.email}</TableCell>
            <TableCell>{props.contact}</TableCell>
            <TableCell>Office  </TableCell>
        </>
    )
}

const ContactList = ({data}) => {
    const [cData,setCData] = useState('')

    useEffect(() => {
        setCData(data)
    },[])
  return (
    <Paper sx={{ width: '100%', height:500, overflowY:'scroll',borderWidth:0}}>
{/* <TableContainer sx={{max}}></TableContainer> */}
<Table stickyHeader aria-label="sticky table" >
        <TableHead>
            <TableRow >
                <TableCell sx={{fontWeight:'bold'}}>Name</TableCell>
                <TableCell sx={{fontWeight:'bold'}}>Email</TableCell>
                <TableCell sx={{fontWeight:'bold'}}>Phone Number</TableCell>
                <TableCell sx={{fontWeight:'bold'}}>Job title & company  </TableCell>
            </TableRow>
            <Typography varient='h3' sx={{marginTop:2}}>All contact (59)</Typography>
        </TableHead>
        <TableBody>

            {
                data.map((item,index)=>(
                    <TableRow key={item.id}>
                            <TableData name={item.name} email={item.email} contact={item.contact}/>
                    </TableRow>
                    
                ))
                   
            }
        </TableBody>
    </Table>
     </Paper>
  
  )
}

export default ContactList