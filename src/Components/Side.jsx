import { List, ListItem,ListItemText,Avatar,Typography,Button,ListItemIcon,ListItemButton } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import UpdateIcon from '@mui/icons-material/Update';
import MergeOutlinedIcon from '@mui/icons-material/MergeOutlined';
import MenuIcon from '@mui/icons-material/Menu';

const Side = () => {
  return (
    <>

    {/* ////////list is here */}
        <List positon='fixed'>
            <ListItem sx={{flexDirection:'row',display:'flex'}}>
              <MenuIcon sx={{right:5}}/>
            <Avatar
            sx={{ bgcolor: 'blue',left:10 }}
            src="/broken-image.jpg" />
            <Typography sx={{marginLeft:2,fontWeight:'bold',color:'gray',fontSize:20}}>
            Contacts
            </Typography>
            </ListItem>

            <ListItem>
                <ListItemText>
                <Button variant="contained" startIcon={<AddIcon />}>
                    Create Contact
                </Button>
                </ListItemText>
            </ListItem>

            <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PersonOutlineIcon color='primary' />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItemButton>
          </ListItem>


            <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <UpdateIcon color='primary' />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItemButton>
          </ListItem>

            <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MergeOutlinedIcon color='primary' />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItemButton>
          </ListItem>
        </List>
        </>
  )
}

export default Side