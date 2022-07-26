import React from 'react';
import { Snackbar, Alert } from '@mui/material/';

const Snack = ({ open, setOpen, duration, severity, message }) => {
    let vertical = 'top';
    let horizontal = 'center';

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            open={open}
            autoHideDuration={duration}
            onClose={handleClose}
        >
            <Alert severity={severity} sx={{ width: '100%' }}>
                {message}
            </Alert>
        </Snackbar>
    );
};

export default Snack;
