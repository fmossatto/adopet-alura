import React from 'react';
import { Snackbar, Alert } from '@mui/material/';

const Snack = ({ open, setOpen, duration }) => {
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
            <Alert severity="success" sx={{ width: '100%' }}>
                Usuário Cadastrado com sucesso, redirecionando para a tela de login!
            </Alert>
        </Snackbar>
    );
};

export default Snack;
