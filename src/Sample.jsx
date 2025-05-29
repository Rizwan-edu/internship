import { Button, Switch, TextField } from '@mui/material'
import React from 'react'
import { alpha, styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';

function Sample() {
    const PinkSwitch = styled(Switch)(({ theme }) => ({
        '& .MuiSwitch-switchBase.Mui-checked': {
          color: pink[600],
          '&:hover': {
            backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
          },
        },
        '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
          backgroundColor: pink[600],
        },
      }));
      
    const label = { inputProps: { 'aria-label': 'Color switch demo' } };
  return (
    <div className='flex'>
    <Button>
        Click
    </Button>

    <Button variant="text">Text</Button>
<Button variant="contained">Contained</Button>
<Button variant="outlined">Outlined</Button>
<TextField id="outlined-basic" label="Enter your Name" variant="outlined" />
<switch {...label} defaultChecked />
<switch {...label} defaultChecked color="secondary" />
<switch {...label} defaultChecked color="warning" />
<switch {...label} defaultChecked color="default" />
<PinkSwitch {...label} defaultChecked />

    </div>

  )
}

export default Sample