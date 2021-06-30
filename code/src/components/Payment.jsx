import React, { Component } from 'react';

class Payment extends Component {
    state = {
        showTextBox: false,
        showTextBox2: false
      };
    
      handleOnChange = e => {
        if(e.target.value==="Cash"){
          this.setState({showTextBox:true})
          this.setState({showTextBox2:false})
        }
        else if (e.target.value==="Visa"){
          this.setState({showTextBox2:true})
          this.setState({showTextBox:false})
        }
        else{
            this.setState({showTextBox2:false})
            this.setState({showTextBox2:false})
        }
    
      };
      handleFinish =() =>{
        console.log("Finish");
        //redirect
        this.props.history.replace('/Thanks') 
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
        return ( 
        <React.Fragment>
        <h1>Choose your payment way</h1>
        <div className="row">
        <div className="col-3">
        <input onChange={this.handleOnChange} type="radio" value="Cash" name="payment" /> Cash
        </div>
        <div className="col">
        {this.state.showTextBox && 
        <div>
        <input placeholder="Enter your name" /> 
        <br />
        <br />
         <input placeholder="Enter your address" />
         </div>}
         </div>
         <div className="col-3">
        <input onChange={this.handleOnChange} type="radio" value="Visa" name="payment" /> Visa
        </div>
        <div className="col">
        {this.state.showTextBox2 && <div>
         <input placeholder="Enter your name" /> 
         <br />
         <br />
         <input placeholder="Enter your address" />
         <br /> 
         <br />
         <input placeholder="Enter your visa number" />
         <br />
         </div>}
         </div>
         
        
      </div>
      <button style={{backgroundColor: "Blue" }} className=" btn btn-secondary btn-sm m-2" onClick={this.handleFinish}>Finish</button>

        </React.Fragment> );
    }
}
 
export default Payment;

