import React, { useState, useEffect } from "react";
import axios from "axios";

function Products(){
    const url = "http://localhost:8080/product/";
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(url).then((response) => {
            setProducts(response.data);
        })
    }, [url])

    console.log(products)

    if(products){
        return (
            <div>
                <h1 className = "text-center"> Products List</h1>
                <table className = "table table-striped">
                    <thead>
                        <tr>

                            <td> Product Id</td>
                            <td> Product Name</td>
                            <td> Product price</td>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            products.map(
                                product => 
                                <tr key = {product.productID}>
                                     <td> {product.productID}</td>   
                                     <td> {product.productName}</td>   
                                     <td> {product.productPrice}</td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>

            </div>

        )
    }

    return (
        <div>
            <h1 className="font-bolld text-2xl">The product page</h1>
        </div>
    )
}

export default Products;