import React, {useState} from 'react';
import { Close, Add ,} from '@mui/icons-material';
import PostAddIcon from '@mui/icons-material/PostAdd'
import {MenuItem, TextField, Button} from '@mui/material';

function Addmenu() {
  const [foodName, setFoodName] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedVatvalue, setSelectedVatvalue] = useState('')
  const [errorMessage, setErrorMessage] = useState(false);
  
  //This method is for selecting new food type.
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  //This method is for selecting new Vat value.
  const handleOptionChangeVat = (event) => {
    setSelectedVatvalue(event.target.value);
  };

  //This method is for 
  const handleTextChange = (event) => {
    errorMessage(event.target.value);
    setErrorMessage(false);
  };

  const handleSubmit = () => {
    if (foodName.trim() === '') {
      setErrorMessage(true);
    } else {
      // Submit form or perform other actions
    }
  }

  return (
    <>
    <div style={{ position: 'relative' }}>
    <h4>Add Menu </h4>
    <Close style={{position: 'absolute', top: '5px', right: '5px', cursor: 'pointer',}}/>
   </div>
    <hr style={{color:'orange', width:'350px'}}></hr>
    <div>

    <TextField className="custom-outline" required id="outlined-basic" label="FoodName" variant="outlined" 
       value={foodName} style={{ marginBottom: '20px' }} onChange={handleTextChange} error={errorMessage}
       helperText={errorMessage ? 'Please enter a food name' : ''} />
    <br />
    <TextField required className="custom-outline" id="outlined-basic" label="Food category" variant="outlined"
      select value={selectedOption} onChange={handleOptionChange} style={{ marginBottom: '20px', width: '220px' }} >
      <MenuItem value="option1">food 1</MenuItem>
      <MenuItem value="option2">food 2</MenuItem>
      <MenuItem value="option3">food 3 Foods</MenuItem>
    </TextField>
    <Add style = {{fontSize: '2rem'}}/>
    <br />
    <TextField required className="custom-outline" id="outlined-basic" label="price" variant="outlined" 
    style={{ marginBottom: '20px', width: '100px'}}/>

    <TextField required className="custom-outline" id="outlined-basic" label="VAT" variant="outlined"
      select value={selectedVatvalue} onChange={handleOptionChangeVat} style={{ marginBottom: '20px', width: '100px' }} >
      <MenuItem value="option1">10%</MenuItem>
      <MenuItem value="option2">20%</MenuItem>
    </TextField>
    <br />
    <TextField required className="custom-outline" id="outlined-basic" label="Description" variant="outlined" 
    style={{ marginBottom: '20px' }}/>

    <br />
    <TextField required className="custom-outline" id="outlined-basic" label="Ingredients" variant="outlined" 
    style={{ marginBottom: '20px' }}/>
    <PostAddIcon style = {{fontSize: '2rem'}}/>

    <Button variant="contained" onClick={handleSubmit}>
        Add
    </Button>
    
    </div>
        
    </>
  );
}

export default Addmenu;
