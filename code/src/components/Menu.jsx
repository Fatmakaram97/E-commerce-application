import React from "react";
import Cart from "./cart";

//1. Component
const Menu = props => {
    console.log(props);
  return (
    
    <React.Fragment>
      <h1>Menu</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.products.map(product => (
            <tr key={product.id}>
              <td><b>{product.name}</b>
              <br />
              <br />
              {product.description}</td>
              <td><img src={product.file} alt="" /></td>
              <td>{product.price}</td>
              <td>
                <Cart onClick={props.onClick} product={product} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default Menu;
