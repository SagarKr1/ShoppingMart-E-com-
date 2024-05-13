import React from 'react';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';

export default function ProductCard(props) {
    console.log(props.product);
    return (
        <>
            <Paper
                sx={{
                    height: 140,
                    width: 100,
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                }}
            >
                <Box>
                <img 
                style={{height:200,width:150}} 
                src={props.product.image} 
                alt={props.product.name}></img>
                </Box>
                <Box>
                    Content
                </Box>
            </Paper>
        </>
    )
}
