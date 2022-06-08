import React from 'react';
import Test from '../Views/Test';

class TTest extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            products:[]
        }
    }

    componentDidMount(){
        Test.getProducts().then((response) => {
            this.setState({ products: response.data})
        });
    }

    render (){
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
                            this.state.products.map(
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
}

export default TTest

