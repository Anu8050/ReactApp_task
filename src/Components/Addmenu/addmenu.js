import React, {useState} from 'react';
import { Close, Add } from '@mui/icons-material';
import {MenuItem, TextField, createTheme, ThemeProvider} from '@mui/material';

function Addmenu() {
  const [selectedOption, setSelectedOption] = useState('');
  
  //This method is for selecting new food type.
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
    <div style={{ position: 'relative' }}>
    <h4>Add Menu </h4>
    <Close style={{position: 'absolute', top: '5px', right: '5px', cursor: 'pointer',}}/>
   </div>
    <hr style={{color:'orange', width:'350px'}}></hr>
    <div>

    <TextField className="custom-outline" required id="outlined-basic" label="FoodName" variant="outlined" 
       style={{ marginBottom: '20px' }} />
    <br />
    <TextField required className="custom-outline" id="outlined-basic" label="Food category" variant="outlined"
      select value={selectedOption} onChange={handleOptionChange} style={{ marginBottom: '20px', width: '220px' }} >
      <MenuItem value="option1">food 1</MenuItem>
      <MenuItem value="option2">food 2</MenuItem>
      <MenuItem value="option3">food 3 Foods</MenuItem>
    </TextField>
    <Add style = {{fontSize: '2rem'}}/>
    <br />
    
    <TextField required className="custom-outline" id="outlined-basic" label="Description" variant="outlined" 
    style={{ marginBottom: '20px' }}/>
    </div>
        
    </>
  );
}

export default Addmenu;
