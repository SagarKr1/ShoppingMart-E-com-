const initialProductState = {
    Product: [
        {
            "id": "001",
            "name": "super rice",
            "image": "../../../assets/images/productImage/rice.png",
            "price": "1000",
            "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.",
            "stock": "25",
            "brand": "demo",
            "size": "5kg",
            "category":"Rice"
        },
        {
            "id": "002",
            "name": "chacki atta",
            "image": "../../../assets/images/productImage/atta.jpeg",
            "price": "1000",
            "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.",
            "stock": "25",
            "brand": "demo",
            "size": "5kg",
            "category":"Atta"
        },
        {
            "id": "003",
            "name": "Fresh food oil",
            "image": "../../../assets/images/productImage/oil.jpg",
            "price": "1000",
            "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.",
            "stock": "25",
            "brand": "demo",
            "size": "5L",
            "category":"Oil"
        },
        {
            "id": "004",
            "name": "soap",
            "image": "../../../assets/images/productImage/soap.jpg",
            "price": "1000",
            "description": "",
            "stock": "25",
            "brand": "demo",
            "size": "250g",
            "category":"Soap"
        },
        {
            "id": "005",
            "name": "toffee",
            "image": "../../../assets/images/productImage/toffee.webp",
            "price": "1000",
            "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.",
            "stock": "25",
            "brand": "demo",
            "size": "5g",
            "category":"Toffee"
        },
        {
            "id": "006",
            "name": "super rice",
            "image": "../../../assets/images/productImage/rice.png",
            "price": "1000",
            "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.",
            "stock": "25",
            "brand": "demo",
            "size": "5kg",
            "category":"Rice"
        },
        {
            "id": "007",
            "name": "chacki atta",
            "image": "../../../assets/images/productImage/atta.jpeg",
            "price": "1000",
            "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.",
            "stock": "25",
            "brand": "demo",
            "size": "5kg",
            "category":"Atta"
        },
        {
            "id": "008",
            "name": "Fresh food oil",
            "image": "../../../assets/images/productImage/oil.jpg",
            "price": "1000",
            "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.",
            "stock": "25",
            "brand": "demo",
            "size": "5L",
            "category":"Oil"
        },
        {
            "id": "009",
            "name": "soap",
            "image": "../../../assets/images/productImage/soap.jpg",
            "price": "1000",
            "description": "",
            "stock": "25",
            "brand": "demo",
            "size": "250g",
            "category":"Soap"
        },
        {
            "id": "010",
            "name": "toffee",
            "image": "../../../assets/images/productImage/toffee.webp",
            "price": "1000",
            "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.",
            "stock": "25",
            "brand": "demo",
            "size": "5g",
            "category":"Toffee"
        }
    ],
    Category: [
        {'category':"All"},
        {'category':"Rice"},
        {'category':"Atta"},
        {'category':"Toffee"},
        {'category':"Oil"},
        {'category':"Soap"},
        {'category':"Sugar"}
    ]
}


const ProductReducer = (state = initialProductState, action) => {
    switch (action.type) {
        case "Add": {
            console.log("State", state);
            console.log("Action", action);
            const product = {
                id: Date.now(),
                name: action.Product.name,
                brand: action.Product.brand,
                description: action.Product.description,
                category: action.Product.category,
                image: action.Product.image,
                price: action.Product.price,
                size: action.Product.size,
                stock: action.Product.stock
            }
            console.log(product);
            state.Product.push(product);
            return state;
        }

        case "Get":
            console.log("GET");
            console.log(action.category)
            state.Product = state.Product.filter((product)=>{
                return product.category===action.category
            })
            return state;

        case "Update":
            console.log(state);
            return state;

        case "Delete":
            console.log("Delete Product",action);
            state.Product = state.Product.filter((product)=>{
                // console.log("payload ",action.payload.id);
                // console.log(todo);
                return product.id!==action.id
            })
            return state;

        default:
            return state;
    }
}

export default ProductReducer;