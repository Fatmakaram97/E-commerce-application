import React, { Component } from 'react';
import Product from './product';

class ShoppingCart extends Component {
    // constructor(props){
    //     super(props);
    //     console.log("shopping cart ==> constructor");
    // }
    // componentDidMount(){
    //     // call Backend server
    //     // console.log("shopping cart ==> didmount");
    // }

    handleDone =() =>{
        console.log("done");
        //redirect
        this.props.history.replace('/payment') 
        //     //Clone
    //     let products = [...this.state.products];
    //         //Edit
    //   products = products.map((p) => {
    //     p.total += this.props.product.price * this.props.product.count;
    //     return p;
    //   }); 
    // console.log(this.state.total)
  }

    render() { 
        const { products, onReset, onIncrement, onDelete, onDecrement } =this.props;

        return (
            <React.Fragment>       
            <h1>Shopping cart</h1> 
            <button className=" btn btn-secondary btn-sm m-2" onClick={onReset}>Reset</button>
            {products.map(product => (
                <Product
                onIncrement = {onIncrement} 
                onDecrement = {onDecrement}
                onDelete={onDelete} key={product.id} product={product}>
                    </Product>
            ))}

            <button style={{backgroundColor: "Green" }} className=" btn btn-secondary btn-sm m-2" onClick={this.handleDone}>Done</button>

            </React.Fragment>
            );
    }
}
 
export default ShoppingCart;