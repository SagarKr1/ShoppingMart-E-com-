import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Paper from '@mui/material/Paper';


const CreateProduct = () => {
    const [Data, setData] = React.useState({
        "name": "",
        "size": "",
        "brand": "",
        "category": "",
        "description": "",
        "price": "",
        "stock": "",
        "images": []
    })

    const handlerData = (e) => {
        console.log("Data");
        // console.log(e.target);
        const { name, value } = e.target;
        setData({
            ...Data,
            [name]: value
        })
        console.log(Data);
    }
    const handlerProduct = () => {
        console.log("Data Submitted");
    }

    const categoryList = [
        { "label": "Atta" },
        { "label": "Toffee" },
        { "label": "Rice" },
        { "label": "Oil" },
        { "label": "Soap" },
        { "label": "Sugar" }
    ]

    return (
        <Paper sx={{padding:{xs:2,sm:5,md:8}}}>
            <Box>
                <Box sx={{ textAlign: "center", marginBottom: 4 }}>
                    Add Your Product Here
                </Box>

                <Box sx={{ display: {xs:"flex",md:"grid"}, flexDirection: "column", gap: 4 }}>
                    <TextField name='name' value={Data.name} onChange={handlerData} id="name" label="Product Name" variant="outlined" />
                    <TextField name='size' value={Data.size} onChange={handlerData} id="size" label="Size" variant="outlined" />
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Category</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            name='category'
                            value={Data.category}
                            label="category"
                            onChange={handlerData}
                        >
                            {
                                categoryList.map((list, index) => {
                                    console.log(list.label);
                                    return <MenuItem key={index} value={list.label}>{list.label}</MenuItem>
                                })
                            }
                        </Select>
                    </FormControl>
                    <TextField name='brand' value={Data.brand} onChange={handlerData} id="brand" label="Brand" variant="outlined" />
                    <TextField name='description' value={Data.description} onChange={handlerData} id="description" label="Description" variant="outlined" />
                    <TextField type='number' name='price' value={Data.price} onChange={handlerData} id="price" label="Price" variant="outlined" />
                    <TextField type='number' name='stock' value={Data.stock} onChange={handlerData} id="stock" label="Stock" variant="outlined" />
                    <Box>
                        <Typography>Upload Images</Typography>
                        <input type='file' multiple name='Upload image' id="fileInput" accept="image/*"/>
                        
                    </Box>
                </Box>

                <Button sx={{ marginTop: 10 }} variant="outlined" onClick={() => handlerProduct()}>Create</Button>
            </Box>
        </Paper>
    )
};

export default CreateProduct;