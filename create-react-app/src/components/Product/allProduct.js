import { Box } from '@mui/system';
import React from 'react';
import Filter from './viewProduct/filter';
import ListProduct from './viewProduct/listProduct';
// import { TextField } from '@mui/material';

export default function AllProduct() {
    const [reload, setReload] = React.useState(false);
    const handleReload = () => {
        setReload(!reload);
    }
    return (
        <Box>
            <Box >
                {/* <Box sx={{flex:1}}><TextField sx={{width:{xs:"48vw",md:"34vw"}}} id="outlined-basic" label="Search" variant="outlined"></TextField></Box> */}

                <Filter Reload={handleReload} />

            </Box>
            <Box
                sx={{
                    // border: "2px solid black" 
                }}>
                <ListProduct />
            </Box>
        </Box>
    )
}
