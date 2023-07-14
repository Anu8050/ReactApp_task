import React from 'react';
import { Close } from '@mui/icons-material';
import {Button, TextField, createTheme, ThemeProvider} from '@mui/material';

function Addmenu() {
  return (
    <>
    <div style={{ position: 'relative' }}>
    <h4>Add Menu </h4>
    <Close style={{position: 'absolute', top: '5px', right: '5px', cursor: 'pointer',}}/>
   </div>
    <hr style={{color:'orange', width:'350px'}}></hr>
    <div>

      <TextField className="custom-outline" id="outlined-basic" label="FoodName" variant="outlined" 
      style={{ marginBottom: '20px' }}
      InputProps={{style: { borderColor: 'green' },  }}
      />
      <br />
      <TextField className="custom-outline" id="outlined-basic" label="Description" variant="outlined" 
      style={{ marginBottom: '20px' }}
      />

    </div>
        
    </>
  );
}

export default Addmenu;
