import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Content from './Components/Content';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import contactData from './Data/contactData';
import { useState } from 'react';
import FormDialog from './Components/FormDialog';



function App() {
  const [open, setOpen] = useState(false);
  const [data,setData] = useState(contactData)
  return (
    <>
    <Header/>

    <Content data={data}/>
    <FormDialog open={open} setOpen={setOpen} data={data} setData={setData} />
    <Fab color="primary"  sx={{position:'absolute',right:50,bottom:50}} aria-label="add">
        <AddIcon onClick={()=> setOpen(true)} />
    </Fab>
    </>
  );
}

export default App;
