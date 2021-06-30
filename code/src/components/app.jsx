import "../index.css"
import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import NavBar from "./navbar";
import ShoppingCart from "./shoppingCart";
import Home from "./Home";
import ProductDetails from "./productDetails";
import Menu from "./Menu";
import NotFound from "./pageNotFound";


import About from './About';
import Contact from './contact';
import Login from './login';

import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import Admin from './admin';
import ProductForm from './productForm';
import Payment from './Payment';
import Thanks from './thanks';

class App extends Component {
  state = {
    products: []
  };
async componentDidMount(){
  const {data} = await axios.get('http://localhost:3000/products/')
  // console.log(data);

  // set state
  this.setState({products: data})


  //const res = promise.then(res => res.json())
 // res.then(data => console.log(data))
  //Pending ==> 
  //            resolved
  //            rejected

}



  handleReset = () => {
    //Clone
    let products = [...this.state.products];
    //Edit
    products = products.map((p) => {
      p.count = 0;
      return p;
    });
    //Set state
    this.setState({ products });
  };

  IncrementHandler = (product) => {
    //Clone
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = { ...products[index] };
    //Edit
    products[index].count++;
    //Set State
    this.setState({ products });
  };

  DecrementHandler = (product) =>{
        //Clone
        const products = [...this.state.products];
        const index = products.indexOf(product);
        products[index] = { ...products[index] };
        //Edit
        products[index].count--;
        //Set State
        this.setState({ products });
  }

  handleDelete = async product => {
    const oldProducts = [...this.state.products] 

    // state
    //Clone
    const products = [...this.state.products];
    const index = products.indexOf(product);
    //Edit
    products.splice(index, 1);
    //Set State
    this.setState({ products });
    //  call back end
    try{
      await axios.delete('http://localhost:3000/products/' + product.id)
    } catch(ex){
      toast.error("Can't delete")
      this.setState({products: oldProducts})
    }
  };

  handleInCartChange = (product) => {
    //Clone
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = { ...products[index] };
    //Edit
    products[index].isInCart = !products[index].isInCart;
    //Set State
    this.setState({ products });
  };

  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar
          productsCount={this.state.products.filter((p) => p.isInCart).length}
        />
        <main className="container">
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/payment" component={Payment} />
            <Route path="/thanks" component={Thanks} />

            <Route path="/productform/:id" component={ProductForm} />
            <Route path="/admin"
             render={(props) => (
              <Admin
              {...props}
                products={this.state.products}
                onDelete={this.handleDelete}
                 />
             )}
             />

            <Route
              path="/products/:id/:name?"
              render={(props) => (
                <ProductDetails products={this.state.products} {...props} />
              )}
            />
            <Route
              path="/cart"
              render={(props) => (
                <ShoppingCart
                  products={this.state.products.filter((p) => p.isInCart)}
                  onIncrement={this.IncrementHandler}
                  onDecrement={this.DecrementHandler}
                  onDelete={this.handleInCartChange}
                  onReset={this.handleReset}
                  // onDone={this.handleDone}
                  {...props}
                />
              )}
            />
            <Route path="/notfound" component={NotFound} />
            {/* //2. Add Route */}
            <Route
              path="/menu"
              render={(props) => (
                <Menu
                  {...props}
                  products={this.state.products}
                  onClick={this.handleInCartChange}
                />
              )}
            />
            <Route path="/home" exact component={Home} />
            <Redirect from="/" to="/home" />
            <Redirect to="/notfound" />



          </Switch>
          {/* <ShoppingCart
            products={this.state.products}
            onIncrement={this.IncrementHandler}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
          /> */}
        </main>
      </React.Fragment>
    );
  }
}

export default App;
