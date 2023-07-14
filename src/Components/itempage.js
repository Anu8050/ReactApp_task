import React, { useState } from 'react';
import { Box, Tabs, Tab, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

function Itempage() {
  const [value, setValue] = useState(0);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const openDialog = () => {
    setDialogOpen(true);
  };

  const closeDialog = () => {
    setDialogOpen(false);
  };

  return (
    <div className='itempage'>
      <Tabs orientation="vertical" value={value} onChange={handleChange} aria-label="Item Tabs">
        <Tab label="Item One" onClick={openDialog} />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </Tabs>
      <Dialog open={dialogOpen} onClose={closeDialog}>
        <DialogTitle>Item One Dialog</DialogTitle>
        <DialogContent>
          <p>This is the content of Item One dialog.</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDialog} color="primary">Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Itempage;
