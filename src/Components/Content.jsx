import { Grid, Typography, Container, TextField,Stack,Avatar } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import React from "react";
import ContactList from "./ContactList";
import Side from "./Side";
import SearchIcon from "@mui/icons-material/Search";
import InfoIcon from '@mui/icons-material/Info';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';

const Content = ({data}) => {
  return (
    <Container maxWidth="xl">
      <Grid container>
        <Grid lg={2.5} item>
          {/* side component lg 3 */}
          <Side />
        </Grid>
        <Grid lg={9.5} marginTop={2}>
        <Stack direction="row">
         <Stack sx={{flex:1.8}}>
         <TextField
          sx={{backgroundColor:'#f1f3f4',borderRadius:5}}
            // size="small"
            inputProps={{ 'aria-label': 'search' }}
            id="fullWidth"
            placeholder="Search"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
                
              ),
            }}
          />
         </Stack>
        <Stack direction="row" spacing={4}  sx={{flex:1,justifyContent:'end',marginTop:2}} >
        <InfoIcon />
         <SettingsIcon/>
         <AppsIcon/>
         <Avatar alt="Cindy Baker" sx={{bottom:5}} src="https://i.pinimg.com/736x/2c/cc/d4/2cccd4fefb43fe092e2a16ee585d5047.jpg" />
        </Stack>
      </Stack>
          <ContactList data={data} />

        </Grid>
      </Grid>
    </Container>
  );
};

export default Content;
