import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Paper from '@mui/material/Paper';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import Loader from './loader';


const CreateProduct = () => {
    const [loader, setLoader] = React.useState(false);
    const [images, setImages] = React.useState([]);
    const [Data, setData] = React.useState({
        "name": "",
        "size": "",
        "unit": "",
        "brand": "",
        "category": "",
        "description": "",
        "price": "",
        "stock": ""
    })

    const handleFileChange = (event) => {
        const files = event.target.files;

        const imageFiles = Array.from(files).filter((file) => file.type.startsWith('image/'));

        setImages(imageFiles);
    };

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
    const handlerProduct = async () => {
        setLoader(true);
        console.log("Data Submitted");
        // console.log(Data)
        if (Data.name != "" && Data.unit != "" && Data.brand != "" && Data.category != "" && Data.description != "" && Data.price != "" && Data.size != "" && Data.stock != "" && images[0] != undefined) {
            console.log(images[0])
            const Product = {
                "name": Data.name,
                "size": Data.size,
                "unit": Data.unit,
                "brand": Data.brand,
                "category": Data.category,
                "description": Data.description,
                "price": Data.price,
                "stock": Data.stock,
                "image": URL.createObjectURL(images[0])
            }
            const url = "https://shoppingmart-backend-1xlt.onrender.com";
            const create = await axios.post(`${url}/createProduct`, Product);
            if (create['data']['statusCode'] == 201 || create['data']['statusCode'] == 200) {
                toast.success(create['data']['body']);
                setData({
                    "name": "",
                    "size": "",
                    "unit": "",
                    "brand": "",
                    "category": "",
                    "description": "",
                    "price": "",
                    "stock": ""
                });
                setImages([]);
                setLoader(false);

            } else {
                toast.error(create['data']['body']);
                setLoader(false);
            }
        } else {
            console.log('Empty Field')
            toast.error("Empty Field")
        }
        // console.log(images[0])
        // dispatch({ type: "Add", Data });
        // console.log(URL.createObjectURL(images[0]))
    }

    const categoryList = [
        { "label": "Atta" },
        { "label": "Toffee" },
        { "label": "Rice" },
        { "label": "Oil" },
        { "label": "Soap" },
        { "label": "Sugar" }
    ]

    const units = [
        { "label": "KG" },
        { "label": "G" },
        { "label": "L" },
        { "label": "ML" },

    ]

    return (
        <Paper sx={{ padding: { xs: 2, sm: 5, md: 8 } }}>
            <Box>
                <Box sx={{ textAlign: "center", marginBottom: 4, fontSize: { xs: 15, sm: 20, md: 35, lg: 35 }, textShadow: "0px 0px 5px #071952" }}>
                    Add Your Product Here
                </Box>

                <Box sx={{ margin: "auto", width: { sm: "60%", md: "70%", lg: "70%" }, display: { xs: "flex", md: "grid" }, flexDirection: "column", gap: 4 }}>
                    <TextField name='name' value={Data.name} onChange={handlerData} id="name" label="Product Name" variant="outlined" />
                    <Box sx={{ display: "flex", flexDirection: "row", gap: 0 }}>
                        <TextField type='number' sx={{ width: "80%" }} name='size' value={Data.size} onChange={handlerData} id="size" label="Size" variant="outlined" />
                        <InputLabel id="demo-simple-select-label"></InputLabel>
                        <Select
                            sx={{ width: "20%" }}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            name='unit'
                            value={Data.unit}
                            label="Unit"
                            onChange={handlerData}
                        >
                            {
                                units.map((list, index) => {
                                    console.log(list.label);
                                    return <MenuItem key={index} value={list.label}>{list.label}</MenuItem>
                                })
                            }
                        </Select>
                    </Box>
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
                        <input
                            type='file'
                            name='Upload image'
                            id="fileInput"
                            accept="image/*"
                            onChange={handleFileChange}
                        />
                        <Box>
                            {
                                images.map((image, index) => (
                                    <Box key={index}>
                                        {console.log("images ", image)}
                                        <img
                                            key={index}
                                            style={{ height: 200, marginTop: 10 }}
                                            src={URL.createObjectURL(image)}
                                            alt="Product"
                                        />
                                    </Box>
                                ))
                            }
                        </Box>
                    </Box>
                </Box>
                {!loader ?
                    <Button sx={{ marginTop: 10 }} variant="outlined" onClick={() => handlerProduct()}>Create</Button> :
                    <Button sx={{ marginTop: 10 }} variant="outlined"><Loader/></Button>
                }
            </Box>
        </Paper>
    )
};

export default CreateProduct;