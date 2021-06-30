import React, { Component } from 'react';

import {Link} from "react-router-dom"

class Product extends Component {
    state ={
        total: 0
    }
    // state = { 
    //     name: this.props.product.name,
    //     count: this.props.product.count
    //     // name: 'burger',
    //     // count: 0,
    //     // imgUrl: "logo192.png",
    //     // names: []
    //     // ['Ahmed','Osama'],
    //  }
    //  1.
    //  renderNames(){
    //      if(this.state.names.length ===0){
    //          return <h2>No names</h2>
    //      }
    //      return(
    //          <ul>
    //         {this.state.names.map
    //             (name => <li key={name}>{name}</li>)}
    //         </ul>
    //      );
    //  }
     getStyles() {
         const styles= this.props.product.count === 0 
        ? {backgroundColor: "yellow" , color: "white"} 
        : {backgroundColor: "blue", color: "white"}
        return styles;
     }

    //  1.
    // increment = () => {
    //     this.IncrementHandler(2)
    // }
     componentWillUnmount(){
console.log("product ==> unmount");

     }


    render() { 
        
        console.log("product ==> render");
        return (
            <React.Fragment>
            <div className='row'>
                <div className='col'>
                <span style={{color: "red"}}>
                    <Link to={`/products/${this.props.product.id}`}>
                    <b>{this.props.product.name}</b>
                    <br />
                    <br />
                    {this.props.product.description}</Link>
                </span>
                </div>
                <div className='col'>
                     <img src={this.props.product.file} alt="" />
                </div>
                <div className='col'>
                <button onClick={() => this.props.onDecrement(this.props.product)} className="btn btn-primary btn-sm">-</button>
                </div>
                <div className='col'>
                <span className=" m-2" style={this.getStyles()}>
                    { "Count: " + this.props.product.count}
                </span>
                </div>
                <div className='col'>
                <button onClick={() => this.props.onIncrement(this.props.product)} className="btn btn-primary btn-sm">+</button>
                </div>
                <div className='col'>
                <span className=" m-2" >
                    { "Price: " +this.props.product.price}
                </span>
                </div>
                <div className='col'>
                <span className=" m-2" >
                    { "Total price: " + this.props.product.price * this.props.product.count}
                </span>
                
                </div>
                <div className='col'>
                <span style={{cursor: 'pointer' }} onClick={() => this.props.onDelete(this.props.product)}>
                <i className="fas fa-trash m-2"></i>
                </span>
                </div>
                
                {/* {this.state.names.length === 0 && <h4>No names</h4>}
              <ul>
                {  this.state.names.map
                    (name => <li key={name}>{name}</li>)}
              </ul> */}
            {/* <img src={this.state.imgUrl} alt="" /> */}
            
              </div>
             

              </React.Fragment>
          );
    }
}
 
export default Product;