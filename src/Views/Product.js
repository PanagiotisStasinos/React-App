import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
import {Routes} from "react-router-dom";
import {Route} from "react-router-dom";
import Delete from "./Delete";

function Product(){
    const { id } = useParams();
    console.log(id);

    const url = `http://localhost:8080/product/${id}`;
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get(url).then((response) => {
            setProduct(response.data);
            console.log(response.status);
        }).catch(error => {
            console.log(error.response.status);
        })
    }, [url])

    if(product){
        return (
            <div>
                <h1>Product</h1>
                <h2>ID {product.productID}</h2>
                <h2>Name {product.productName}</h2>
                <h2>Price {product.productPrice}</h2>

                <br></br>
                <button onClick={<Routes><Route path="/delete/:id" element={<Delete/>}/></Routes>}>delete</button>
            </div>
            
            
        );
    
    }
    

    return (
        <div>
            <h1 className="font-bolld text-2xl">The product page</h1>
        </div>
    )
}



export default Product;