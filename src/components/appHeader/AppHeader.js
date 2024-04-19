import React from 'react';
import { Button, Avatar, TextField } from '@mui/material';
import { green } from '@mui/material/colors';
import './AppHeader.css';

const AppHeader = () => {
    return (
        <div className="container">
            <h1>Afro-Cuban<br /><span className='musicalPortal'>MusicalPortal</span></h1>
            <TextField
                label='SEARCH'
                id="filled-hidden-label-small"
                variant="filled"
                size="medium"
                color="success"
                className="textField"
                sx={{
                    '& .MuiFilledInput-input': {
                        color: 'white'
                    },
                    '& .MuiFormLabel-root': {
                        color: 'white',
                    },
                }}
            />

            <Button variant="outlined" color="success" className='button'>upload music</Button>
            <Avatar className='avatar' sx={{ bgcolor: green[500] }}>U</Avatar>
        </div>
    );
}

export default AppHeader;
