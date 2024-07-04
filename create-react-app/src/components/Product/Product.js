import { Box } from '@mui/system';
import React from 'react';
import { useParams } from 'react-router-dom';
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

export default function Product() {
    const { id } = useParams();
    const [Edit, setEdit] = React.useState(false);
    const [productData, setProductData] = React.useState({
        "name": "",
        "size": "",
        "unit": "",
        "brand": "",
        "category": "",
        "description": "",
        "price": "",
        "stock": ""
    });

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

    const [loader, setLoader] = React.useState(false);

    const [images, setImages] = React.useState([]);
    //images
    const handleFileChange = (event) => {
        const files = event.target.files;

        const imageFiles = Array.from(files).filter((file) => file.type.startsWith('image/'));

        setImages(imageFiles);
    };

    const handlerData = (e) => {
        // console.log("Data");
        // console.log(e.target);
        const { name, value } = e.target;
        setData({
            ...Data,
            [name]: value
        })
        console.log(Data);
    }

    const categoryList = [
        { "label": "ATTA" },
        { "label": "TOFFEE" },
        { "label": "RICE" },
        { "label": "OIL" },
        { "label": "SOAP" },
        { "label": "SUGAR" }
    ]

    const units = [
        { "label": "KG" },
        { "label": "G" },
        { "label": "L" },
        { "label": "ML" },

    ]
    console.log(id);
    React.useEffect(() => {
        async function productAPI() {
            console.log("API Call");
            const url = "https://shoppingmart-backend-1xlt.onrender.com";
            const getProduct = await axios.get(`${url}/Product/${id}`);
            if (getProduct['data']['statusCode'] == 201 || getProduct['data']['statusCode'] == 200) {
                console.log(getProduct);
                if (getProduct['data']['body'] == null) {
                    setProductData(null);
                    console.log(productData);
                } else {
                    setProductData(getProduct['data']['body']);
                    setData(getProduct['data']['body']);
                    console.log(productData);
                }
            } else {
                setProductData(null);
            }
        }
        productAPI();
    }, [])

    const editHandler = (edit) => {
        switch(edit){
            case 'edit':
                setEdit(true);
                break;

            case 'cancel':
                setEdit(false);
                setData(productData);
                break;

            case 'save':
                setLoader(true);
                console.log(Data);
                setEdit(false);
                toast.success("Data change");
                setLoader(false);
                break;
        }
    }

    return (
        <Paper sx={{ padding: { xs: 2, sm: 5, md: 8 } }}>
            <Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                    <Button >Back</Button>
                    {
                        !Edit ?
                            <Button onClick={()=>editHandler('edit')} >Edit</Button> :
                            <Box>
                                {!loader?<Button onClick={()=>editHandler('save')} variant="outlined">Save</Button>:<Button sx={{ marginTop: 10 }} variant="outlined"><Loader /></Button>}
                                <Button onClick={()=>editHandler('cancel')} variant="outlined">Cancel</Button>
                            </Box>
                    }

                </Box>

                <Box sx={{ margin: "auto", width: { sm: "60%", md: "70%", lg: "70%" }, display: { xs: "flex", md: "grid" }, flexDirection: "column", gap: 4 }}>
                    <TextField
                        name='name' value={Data.name} onChange={handlerData} id="name" label="Product Name" variant="outlined"
                        inputProps={{
                            readOnly: !Edit
                        }}
                    />
                    <Box sx={{ display: "flex", flexDirection: "row", gap: 0 }}>
                        <TextField
                            inputProps={{
                                readOnly: !Edit
                            }}
                            type='number' sx={{ width: "80%" }} name='size' value={Data.size} onChange={handlerData} id="size" label="Size" variant="outlined" />
                        <InputLabel id="demo-simple-select-label"></InputLabel>
                        <Select
                            inputProps={{
                                readOnly: !Edit
                            }}
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
                            inputProps={{
                                readOnly: !Edit
                            }}
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
                    <TextField
                        inputProps={{
                            readOnly: true
                        }}
                        name='brand' value={Data.brand} onChange={handlerData} id="brand" label="Brand" variant="outlined" />
                    <TextField
                        inputProps={{
                            readOnly: !Edit
                        }}
                        name='description' value={Data.description} onChange={handlerData} id="description" label="Description" variant="outlined" />
                    <TextField
                        inputProps={{
                            readOnly: true
                        }}
                        type='number' name='price' value={Data.price} onChange={handlerData} id="price" label="Price" variant="outlined" />
                    <TextField
                        inputProps={{
                            readOnly: true
                        }}
                        type='number' name='stock' value={Data.stock} onChange={handlerData} id="stock" label="Stock" variant="outlined" />
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
            </Box>
        </Paper>
    )
}
