import React, { useState } from 'react';
import { Box, Tabs, Tab, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import Header from './Header/headerpage';

function Itempage() {
  const [value, setValue] = useState(0);
  const [dialogOpen, setDialogOpen] = useState(false);

  //This function is for setting new value to the setvalue constant.
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //This function is for open a Dialog message.
  const openDialog = () => {
    setDialogOpen(true);
  };
 
  //This function is for close a Dialog message.
  const closeDialog = () => {
    setDialogOpen(false);
  };

  return (
    <div className='itempage'>
      <Header />
      <Tabs orientation="vertical" value={value} onChange={handleChange} aria-label="Item Tabs">
        <Tab label="Add" onClick={openDialog} />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </Tabs>
      <Dialog open={dialogOpen} onClose={closeDialog}>
        <DialogTitle>Add Menu</DialogTitle>
        <DialogContent>
          <p>This is the content of Add menu</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDialog} color="primary">Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Itempage;
