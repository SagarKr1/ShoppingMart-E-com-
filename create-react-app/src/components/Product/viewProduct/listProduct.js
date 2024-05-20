import React from 'react';
// import Card from '@mui/material/Card';
import ProductCard from './productCard';
import Grid from '@mui/material/Grid';
import { useSelector } from 'react-redux';

export default function ListProduct() {
    const [reload, setReload] = React.useState(false);

    const handleReload = ()=>{
        setReload(!reload);
    }

    const productList = useSelector((state)=>{
        // console.log(state);
        return state.product.Product;
    });

    React.useEffect(()=>{
        console.log("Refresh")
    },[reload])

    // console.log("ProductReducer ",productList);

    // console.log(productList[0].image);


    return (
        <Grid sx={{ flexGrow: 1 }} container spacing={2} >
            {
                productList.map((product) => {
                    return (
                        <Grid
                            key={product.id}
                            item
                            xs={12}
                            sm={6}
                            md={4}
                            lg={3}
                            sx={{ marginBottom: 12 ,border:"2px solid yellow"}}
                        >
                            <ProductCard product={product} Reload={handleReload}/>
                        </Grid>
                    )
                }
                )}
        </Grid>
    )
}
