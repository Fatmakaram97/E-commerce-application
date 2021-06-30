import React, { Component } from "react";
import axios from "axios";

class ProductForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      file: null
    }
    this.handleChangeImage = this.handleChangeImage.bind(this)
  }
  state = { id: "", name: "", price: "" , description: "" };

  async componentDidMount() {
    const id = this.props.match.params.id;
    if (id !== "new") {
      const { data } = await axios.get(
        'http://localhost:3000/products/' + id
      );
      console.log(data);
      //Clone
      const state = { ...this.state };
      //Edit
      state.name = data.name;
      state.description = data.description;
      // state.file = data.file;
      state.price = data.price;
      state.id = data.id;
      //Set state
      this.setState(state);
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    // Add
    if(this.props.match.params.id ==="new"){
    // call Back end
    const obj = { ...this.state , count:0, isInCart: false}
    await axios.post('http://localhost:3000/products/', obj) 
    // console.log("submit");
    }
    else{
      // Edit
      const obj ={...this.state, count:0, isInCart:false}
      //Delete id
      delete obj.id
      await axios.put('http://localhost:3000/products/' + this.state.id, obj)
    }
    //redirect
    this.props.history.replace('/admin') 
  };

  handleChange = (e) => {
    //Clone
    let state = { ...this.state };
    //Edit
    state[e.currentTarget.name] = e.currentTarget.value;
    //Set state
    this.setState(state);
  };
  handleChangeImage = (e) =>{
        
    this.setState({
      file: URL.createObjectURL(e.target.files[0])
    })
  }
  render() {
    return (
      <React.Fragment>
        <h1>
          {this.props.match.params.id === "new"
            ? "Add Product"
            : "Edit Product"}
        </h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              className="form-control"
              onChange={this.handleChange}
              value={this.state.name}
              id="name"
              name="name"
              type="text"
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              className="form-control"
              onChange={this.handleChange}
              value={this.state.description}
              id="description"
              name="description"
              type="text"
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              className="form-control"
              onChange={this.handleChange}
              value={this.state.price}
              id="price"
              name="price"
              type="text"
            />
          </div>
          <div className="form-group">
            <label htmlFor="image">Insert the image</label>
            <input
              className="form-control"
              onChange={this.handleChangeImage}
              // value={this.state.file}
              // id="image"
              // name="image"
              type="file"
            />
            <img src={this.state.file} alt=""/>
          </div>
          <button type="submit" className="btn btn-primary">
            {this.props.match.params.id === "new" ? "Add" : "Edit"}
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default ProductForm;
