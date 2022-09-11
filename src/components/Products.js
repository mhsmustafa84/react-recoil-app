import React from 'react';
import { Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Link } from 'react-router-dom';
import productsAtom from '../atoms/productsAtom';
import { useRecoilState } from 'recoil';

export const Products = () => {
    const [products] = useRecoilState(productsAtom);
    return (
        <Grid container flexDirection={'column'} p='50px'>
            <Grid item>
                <Button variant='outlined' color='success'>
                    <Link to='add'>Add New Product</Link>
                </Button>
            </Grid>
            <Grid item>
                <TableContainer component={Paper}>
                    <Table size='medium'>
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Price</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {products?.map(({ name, price }, index) => (
                                <TableRow key={index}>
                                    <TableCell>{name}</TableCell>
                                    <TableCell>{price}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    );
};
