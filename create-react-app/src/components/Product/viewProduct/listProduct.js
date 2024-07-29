import React from 'react';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
// import axios from 'axios';
// import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';



export default function ListProduct(props) {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleDeleteProduct = async (id) => {
        const data = {
            "id": id
        };
        console.log(data);
        setAnchorEl(null);
        const url = "https://shoppingmart-backend-1xlt.onrender.com";
        const deleteProduct = await axios.delete(`${url}/product/delete`, { data: data });
        console.log(deleteProduct);
        if (deleteProduct['data']['statusCode'] === 200) {
            toast.success(deleteProduct['data']['body']);
            props.reload()
        } else {
            toast.error(deleteProduct['data']['body']);
        }

    }

    const handleClose = () => {
        setAnchorEl(null);
    };

    const productHandler = (id) => {
        console.log("Product Page ", id);
        navigate(`/product/${id}`);
    }



    return (
        <Grid sx={{ flexGrow: 1 }} container spacing={2} >
            {
                props.productList.map((product) => {
                    return (
                        <Grid
                            key={product.id}
                            item
                            xs={12}
                            sm={6}
                            md={4}
                            lg={3}
                            sx={{
                                marginBottom: 12
                                // border:"2px solid yellow"
                            }}
                        >
                            <Paper
                                sx={{
                                    // height:400,
                                    width: 200,
                                    margin: "auto",
                                    // border: "2px solid red",
                                    backgroundColor: (theme) =>
                                        theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                                }}
                            >
                                <Box sx={{ margin: "auto" }}>
                                    <IconButton sx={{ position: "absolute" }}
                                        aria-controls={open ? 'basic-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                        onClick={handleClick}
                                    >
                                        {/* {console.log(product.id)} */}
                                        <MoreVertIcon />
                                    </IconButton>
                                    <Menu
                                        id="basic-menu"
                                        anchorEl={anchorEl}
                                        open={open}
                                        // print={console.log(product.id)}
                                        onClose={handleClose}
                                        MenuListProps={{
                                            'aria-labelledby': 'basic-button',
                                        }}
                                    >
                                        <MenuItem
                                            onClick={() => {
                                                console.log(product.id);
                                                handleDeleteProduct(product.id)
                                            }}
                                        >Delete</MenuItem>
                                        <MenuItem
                                            onClick={() => productHandler(product.id)}
                                        >Edit</MenuItem>

                                    </Menu>
                                    <Box>
                                        <img
                                            style={{ height: 200, width: 195, borderTopLeftRadius: 5, WebkitBorderTopRightRadius: 5 }}
                                            src={product.image}
                                            alt={product.name}></img>
                                    </Box>

                                    <Box
                                        sx={{
                                            margin: 2,
                                            '&:hover': {
                                                cursor: 'pointer'
                                            },
                                        }}
                                        onClick={() => productHandler(product.id)}
                                    >
                                        <Box >
                                            <hr />
                                            <Typography style={{ fontSize: 20, fontWeight: 30 }}>
                                                {product.name}
                                            </Typography>
                                            <Typography>
                                                <CurrencyRupeeIcon /><b style={{ fontSize: 20, color: '#03AED2' }}>
                                                    {product.price}
                                                </b>
                                            </Typography>
                                            <Typography style={{ fontSize: 20, fontWeight: 30 }}>
                                                Stock : <b>{product.stock}</b>
                                            </Typography>
                                            <Typography style={{
                                                fontSize: 20, fontWeight: 100, color: "#C40C0C"
                                            }}>
                                                <b>{product.brand}</b>
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Paper>
                        </Grid>
                    )
                })
            }
        </Grid>
    )
}
