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


export default function SwipeableTemporaryDrawer(props) {
    const [search,setSearch] = React.useState('');
    const dispatch = useDispatch();
    const CategoryList = useSelector((state) => {
        // console.log(state);
        return state.product.Category;
    });
    const [state, setState] = React.useState({
        right: false
    });
    const searchHandler = (e)=>{
        setSearch(e.target.value);
        console.log(search)
    }

    const handleFilter = (category) => {
        console.log("Click ", category);
        dispatch({ type: 'Get', category: category })
        props.Reload()
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
        <Box sx={{display:"flex",flexDirection:"row" , marginBottom: 5 }}>
            <Box sx={{flex:1}}>
            <TextField name='search' value={search} onChange={searchHandler} sx={{width:{xs:"48vw",md:"34vw"}}} id="outlined-basic" label="Search" variant="outlined"></TextField>
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
    );
}
