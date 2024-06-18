import React from 'react';
// import Card from '@mui/material/Card';
import ProductCard from './productCard';
import Grid from '@mui/material/Grid';
import { useSelector } from 'react-redux';
import ProductSkeleton from './productSkeleton';
import axios from 'axios';
import { Box } from '@mui/system';

export default function ListProduct() {
    const [pLoad, setPLoad] = React.useState(true);
    const [reload, setReload] = React.useState(false);

    const handleReload = () => {
        setReload(!reload);
    }

    let productList ;
    // = useSelector((state) => {
    //     console.log(state);
    //     return state.product.Product;
    // });

    React.useEffect(() => {
        const fetchData = async () => {
            const url = "https://shoppingmart-backend-1xlt.onrender.com/Product";
            const productList = await axios.get(url);
            console.log(productList['data']['statusCode']);
            if(productList['data']['statusCode']===200){
                setPLoad(!pLoad);
                console.log(productList);
            }
        }
        fetchData();
        console.log("Refresh")
    }, [reload])



    return (
        <Grid sx={{ flexGrow: 1 }} container spacing={2} >
            {
                !pLoad ? <Box>
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
                                    sx={{
                                        marginBottom: 12,
                                        // border:"2px solid yellow"
                                    }}
                                >
                                    <ProductCard product={product} Reload={handleReload} />
                                </Grid>
                            )
                        })
                    }
                </Box> : <>
                    <ProductSkeleton />
                </>
            }

        </Grid>
    )
}
