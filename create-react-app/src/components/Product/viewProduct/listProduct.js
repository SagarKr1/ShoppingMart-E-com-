import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import rice from '../../../assets/images/productImage/rice.png'
import atta from '../../../assets/images/productImage/atta.jpeg'
import oil from '../../../assets/images/productImage/oil.jpg'
import toffee from '../../../assets/images/productImage/toffee.webp'
import soap from '../../../assets/images/productImage/soap.jpg'
import { Box } from '@mui/system';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

export default function ListProduct() {
    const productList = [
        {
            "id": "001",
            "name": "super rice",
            "image": rice,
            "price": "1000",
            "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.",
            "stock": "25",
            "brand": "demo",
            "size": "5kg"
        },
        {
            "id": "002",
            "name": "chacki atta",
            "image": atta,
            "price": "1000",
            "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.",
            "stock": "25",
            "brand": "demo",
            "size": "5kg"
        },
        {
            "id": "003",
            "name": "Fresh food oil",
            "image": oil,
            "price": "1000",
            "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.",
            "stock": "25",
            "brand": "demo",
            "size": "5L"
        },
        {
            "id": "004",
            "name": "soap",
            "image": soap,
            "price": "1000",
            "description": "",
            "stock": "25",
            "brand": "demo",
            "size": "250g"
        },
        {
            "id": "005",
            "name": "toffee",
            "image": toffee,
            "price": "1000",
            "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.",
            "stock": "25",
            "brand": "demo",
            "size": "5g"
        }
    ]
    console.log(productList[0].image);
    return (
        <Card sx={{ display: "flex", flexDirection: "column", maxWidth: "95%",gap:5 }}>
            {
                productList.map((product,index) => {
                    return <Box key={index} sx={{display:"flex",flexDirection:"row"}}>
                        <img style={{height:200,width:150}} id={index} src={product.image} alt={product.name}></img>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {product.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                <Typography><CurrencyRupeeIcon/>{product.price}</Typography>
                                <Typography>Stock : {product.stock}</Typography>
                            </Typography>
                            {/* <Typography variant="body2" color="text.secondary">
                                {product.brand}
                            </Typography> */}
                            <Typography variant="body2" color="text.secondary">
                                {product.brand}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Edit</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Box>
                })
            }
        </Card>
    )
}
