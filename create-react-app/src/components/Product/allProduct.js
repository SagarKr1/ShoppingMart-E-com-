import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Filter from './viewProduct/filter';
import ListProduct from './viewProduct/listProduct';

export default function AllProduct() {
    return (
        <Box>
            <Box sx={{ border: "2px solid black", marginBottom: 5 }}>
                Search Bar
            </Box>
            <Box sx={{ border: "2px solid black" }}>
                <Grid container spacing={2}>
                    <Grid sx={{ border: "2px solid black" }} item xs={10}>
                        <ListProduct/>
                    </Grid>
                    <Grid sx={{ border: "2px solid black" }} item xs={2}>
                        <Filter/>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}
