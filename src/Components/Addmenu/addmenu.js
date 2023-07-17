import React, {useState} from 'react';
import { styled } from '@mui/material/styles';
import { Close, Add ,} from '@mui/icons-material';
import { DropzoneArea } from 'material-ui-dropzone';
import AddPhotoAlternateRoundedIcon from '@mui/icons-material/AddPhotoAlternateRounded';
import PostAddIcon from '@mui/icons-material/PostAdd'
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MultiInputTimeRangeField } from '@mui/x-date-pickers-pro/MultiInputTimeRangeField';
import { SingleInputTimeRangeField } from '@mui/x-date-pickers-pro/SingleInputTimeRangeField';
import {MenuItem, TextField, createTheme, ThemeProvider, Stack, InputAdornment, FormHelperText  } from '@mui/material';
import dayjs from 'dayjs';
import './theme.css';

function Addmenu() {
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedVatvalue, setSelectedVatvalue] = useState('')
  const [foodName, setFoodName] = useState('');
  const [foodNameError, setFoodNameError] = useState(false);
  const [foodNameFocused, setFoodNameFocused] = useState(false);
  const [description, setDescription] = useState('');
  const [descriptionError, setDescriptionError] = useState(false);
  const [descriptionFocused, setDescriptionFocused] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  
  //This method is for selecting new food type.
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  //This method is for selecting new Vat value.
  const handleOptionChangeVat = (event) => {
    setSelectedVatvalue(event.target.value);
  };

  const handleFoodNameChange = (event) => {
    setFoodName(event.target.value);
    setFoodNameError(false);
  };

  const handleFoodNameFocus = () => {
    if (!foodName) {
      setFoodNameError(true);
    }
    setFoodNameFocused(true);
  };

  const handleFoodNameBlur = () => {
    setFoodNameFocused(false);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
    setDescriptionError(false);
  };

  const handleDescriptionFocus = () => {
    if (!description) {
      setDescriptionError(true);
    }
    setDescriptionFocused(true);
  };

  const handleDescriptionBlur = () => {
    setDescriptionFocused(false);
  };

  const theme = createTheme({
    palette: {
        primary: {
        main: '#FFA500'
        },
    },
    });

  return (
    <>
    <div style={{ position: 'relative' }}>
    <h4>Add Menu </h4>
    <Close style={{position: 'absolute', top: '5px', right: '5px', cursor: 'pointer',}}/>
   </div>
    <hr style={{color:'orange', width:'350px'}}></hr>
    <ThemeProvider theme={theme}>
    <div>
    <TextField fullWidth className="custom-outline" required id="outlined-basic" label="FoodName" 
        variant="outlined" InputProps={{style: { borderColor: 'orange' }}} 
        value={foodName} style={{ marginBottom: '20px' , color:'orange'}} 
        onChange={handleFoodNameChange}  onBlur={handleFoodNameBlur} onFocus={handleFoodNameFocus}
       error={foodNameError && foodName.trim() === ''} helperText={foodNameError && !foodNameFocused ? 'Required' : ''}
       />
    <br />
    <TextField fullWidth required className="custom-outline" id="outlined-basic" label="Food category" variant="outlined"
      select value={selectedOption} onChange={handleOptionChange} style={{ marginBottom: '20px', width:'315px' }} >
      <MenuItem value="option1">food 1</MenuItem>
      <MenuItem value="option2">food 2</MenuItem>
      <MenuItem value="option3">food 3 Foods</MenuItem>
    </TextField>
    <Add style = {{fontSize: '2rem'}}/>
    <br />
    <TextField required className="custom-outline" id="outlined-basic" label="price" variant="outlined" 
    style={{ marginBottom: '20px', width:'100px',spacing:'5px'}}/>

    <TextField required className="custom-outline" id="outlined-basic" label="VAT" variant="outlined"
      select value={selectedVatvalue} onChange={handleOptionChangeVat} style={{ marginBottom: '20px', width: '100px' }} >
      <MenuItem value="option1">10%</MenuItem>
      <MenuItem value="option2">20%</MenuItem>
    </TextField>
    <br />
    <TextField className="custom-outline" required id="outlined-multiline-static" label="Description" multiline rows={4} variant="outlined" 
      value={description} style={{ marginBottom: '20px', width:'350px', color:'orange' }} onChange={handleDescriptionChange} 
      onFocus={handleDescriptionFocus}  onBlur={handleDescriptionBlur} error={descriptionError} 
      helperText={descriptionError && !descriptionFocused ? 'Required' : ''}/>
    <br />
    <TextField required className="custom-outline" id="outlined-basic" label="Ingredients" variant="outlined" 
    style={{ marginBottom: '20px', width:'315px' }}/>
    <PostAddIcon style = {{fontSize: '2rem'}}/>
    <br/>
    <Stack spacing={2} style ={{paddingRight:'5px',paddingLeft:'5px', paddingTop:'5px', paddingBottom:'5px',width:'100px'}}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <TextField
          className="custom-outline"
          id="outlined-basic"
          label="Choose Available Time"
          variant="outlined"
          focused
          style={{ marginBottom: '20px', width:'350px', paddingRight:'5px',paddingLeft:'5px', paddingTop:'5px', paddingBottom:'5px'}}
          InputProps={{
            endAdornment: (
              <>
                <TextField
                  className="custom-outline"
                  id="outlined-basic"
                  label="From"
                  variant="outlined"
                  focused
                  style={{ width: '700px', marginBottom: '15px',marginTop: '10px', paddingRight: '60px' }}
                  
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <MobileTimePicker
                            sx={{ border: 'none', width: '400px', "& fieldset": { border: 'none' } }}
                            value={dayjs('2022-04-17T15:30')}
                            onChange={() => {}}
                            renderInput={(params) => (
                              <TextField {...params} className="custom-outline" variant="outlined" label='From' />
                            )}
                          />
                        </LocalizationProvider>
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  className="custom-outline"
                  id="outlined-basic"
                  label="To"
                  variant="outlined"
                  focused
                  style={{ width: '700px', marginBottom: '15px',marginTop: '10px', paddingRight: '5px'  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <MobileTimePicker
                            sx={{ border: 'none', width: '400px', "& fieldset": { border: 'none' } }}
                            value={dayjs('2022-04-17T15:30')}
                            onChange={() => {}}
                            renderInput={(params) => (
                              <TextField {...params} className="custom-outline" variant="outlined" label='From' />
                            )}
                          />
                        </LocalizationProvider>
                      </InputAdornment>
                    ),
                  }}
                />
              </>
            ),
          }}
        />
      </LocalizationProvider>
    </Stack>
    <br/>

    <br/>
    
    <br/>
    <DropzoneArea dropzoneText='Drag and drop food image here or'>
    <AddPhotoAlternateRoundedIcon />
    </DropzoneArea>

    </div>
     
    <br />
      
    </ThemeProvider>
    </>
  );
}

export default Addmenu;
