import React, { useState } from 'react';
import { Button, Grid, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const AddProducts = ({ setProducts }) => {
    const navigate = useNavigate();
    const [state, setState] = useState({ name: '', price: '' });

    const getValue = ({ target }) => {
        setState(prevState => ({ ...prevState, [target.name]: target.value }));
    };

    const onClickSave = () => {
        setProducts(prevState => [...prevState, state]);
        navigate('/');
    };

    return (
        <Grid container justifyContent={'center'} gap={5} p='50px'>
            <Grid item>
                <TextField name='name' label='Name' variant='filled' color='warning' value={state.name} onChange={getValue} />
            </Grid>
            <Grid item>
                <TextField
                    name='price'
                    label='Price'
                    variant='filled'
                    color='warning'
                    type={'number'}
                    value={state.price}
                    onChange={getValue}
                />
            </Grid>
            <Button variant='contained' color='success' onClick={onClickSave}>
                Save
            </Button>
        </Grid>
    );
};
