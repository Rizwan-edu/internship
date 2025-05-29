import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';



function Component() {
  return (
    <><div className='max-w-md mx-auto'>
    <div className='grid gap-5'>
      <h1 className='text-black font-bold'>Contact Us</h1>
      <p className="font-normal text-[12px] mt-3 mb-2">Name</p>
      <TextField id="outlined-basic" label="Enter your Name" variant="outlined" />
      <p className="font-normal text-[12px] mt-3 mb-2">Email</p>
      <TextField id="outlined-basic" label="Enter your Name" variant="outlined" />
      <p className="font-normal text-[12px] mt-3 mb-2">Message</p>
      
      <TextField
          id="outlined"
          label="Message"
          multiline
          rows={4}
          defaultValue="Default Value"
        />
      <Button variant="contained" disableElevation>
  submit
</Button>
      
    </div></div>
   
    </> 
  )
}

export default Component