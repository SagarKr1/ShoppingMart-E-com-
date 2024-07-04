import ListProduct from './viewProduct/listProduct';
import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { TextField } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import ProductSkeleton from './viewProduct/productSkeleton';
import axios from 'axios';

export default function AllProduct() {
    const [search, setSearch] = React.useState('');
    const [productLoad, setLoad] = React.useState(false);
    const [product, setProduct] = React.useState([]);
    const [load,setReload] = React.useState(false);
    const dispatch = useDispatch();
    const CategoryList = useSelector((state) => {
        return state.product.Category;
    });
    const loader = ()=>{
        setReload(!load);
    } 
    const [state, setState] = React.useState({
        right: false
    });
    const searchHandler = (e) => {
        setSearch(e.target.value);
        console.log(search)
    }

    const handleFilter = (category) => {
        console.log("Click ", category);
        dispatch({ type: 'Get', category: category })
    }

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    React.useEffect(() => {
        const fetchData = async () => {
            const url = "https://shoppingmart-backend-1xlt.onrender.com/Product";
            console.log(url);
            const getAllData = await axios.get(url);
            console.log(getAllData['data']['statusCode']);
            if (getAllData['data']['statusCode'] === 200 || getAllData['data']['statusCode'] === 201) {
                setProduct(getAllData['data']['body']);
                setLoad(true);
            }
        }
        fetchData();
        console.log("Refresh");
    }, [load]);

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {CategoryList.map((text, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text.category} onClick={() => handleFilter(text.category)} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );


    return (
        <Box>
            {
                !productLoad ? <><ProductSkeleton/></> : <>

                    {/* Filter  */}
                    < Box >
                        {/* <Box sx={{flex:1}}><TextField sx={{width:{xs:"48vw",md:"34vw"}}} id="outlined-basic" label="Search" variant="outlined"></TextField></Box> */}

                        < Box sx={{ display: "flex", flexDirection: "row", marginBottom: 5 }}>
                            <Box sx={{ flex: 1 }}>
                                <TextField name='search' value={search} onChange={searchHandler} sx={{ width: { xs: "48vw", md: "34vw" } }} id="outlined-basic" label="Search" variant="outlined"></TextField>
                            </Box>
                            <Box>
                                <React.Fragment key={'right'}>
                                    <Button onClick={toggleDrawer('right', true)}>Filter</Button>
                                    <SwipeableDrawer
                                        anchor={'right'}
                                        open={state['right']}
                                        onClose={toggleDrawer('right', false)}
                                        onOpen={toggleDrawer('right', true)}
                                    >
                                        {list('right')}
                                    </SwipeableDrawer>
                                </React.Fragment>
                            </Box>
                        </Box>
                    </Box >
                    {/* Filter Close */}

                    {/* all Products List */}
                    <Box
                        sx={{
                            // border: "2px solid black" 
                        }}>
                        <ListProduct reload={loader} productList={product} />
                    </Box>
                    {/* all Products List close */}
                </>

            }
        </Box >
    )
}
