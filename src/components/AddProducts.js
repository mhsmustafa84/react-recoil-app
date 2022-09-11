import React, { useState } from 'react';
import { Button, Grid, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import productsAtom from '../atoms/productsAtom';
import { useRecoilState } from 'recoil';

export const AddProducts = () => {
    const navigate = useNavigate();
    const [, setProducts] = useRecoilState(productsAtom);
    const [state, setState] = useState({ name: '', price: '' });

    const getValue = ({ target }) => {
        setState(prevState => ({ ...prevState, [target.name]: target.value }));
    };

    const onClickSave = () => {
        if (!state.name || !state.price) return;
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
