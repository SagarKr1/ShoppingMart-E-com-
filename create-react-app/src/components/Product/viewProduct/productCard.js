import React from 'react';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useDispatch } from 'react-redux';

export default function ProductCard(props) {
    const dispatch = useDispatch()

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleDeleteProduct =(id)=>{
        console.log("product Id ",id);
        dispatch({ type: "Delete", id })
        setAnchorEl(null);
        props.Reload()
    }
    const handleClose = () => {
        setAnchorEl(null);
    };
    // console.log(props);
    return (
        <>
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
                        <MoreVertIcon />
                    </IconButton>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleClose}>Edit</MenuItem>
                        <MenuItem onClick={()=>handleDeleteProduct(props.product.id)}>Delete</MenuItem>
                    </Menu>
                    <Box>
                        <img
                            style={{ height: 200, width: 195, borderTopLeftRadius: 5, WebkitBorderTopRightRadius: 5 }}
                            src={props.product.image}
                            alt={props.product.name}></img>
                    </Box>
                    <Box sx={{ margin: 2 }}>
                        <Box >
                            <Typography style={{ fontSize: 20, fontWeight: 30 }}>
                                {props.product.name}
                            </Typography>
                            <Typography>
                                <CurrencyRupeeIcon /><b style={{ fontSize: 20, color: '#03AED2' }}>
                                    {props.product.price}
                                </b>
                            </Typography>
                            <Typography style={{ fontSize: 20, fontWeight: 30 }}>
                                Stock : <b>{props.product.stock}</b>
                            </Typography>
                            <Typography style={{ 
                                fontSize: 20, fontWeight: 100, color: "#C40C0C" 
                                }}>
                                <b>{props.product.brand}</b>
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Paper>
        </>
    )
}
