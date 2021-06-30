import React, { Component } from 'react';

import Joi from "joi-browser";
import axios from 'axios';

class Login extends Component {
    state = { 
        username: "",
        password: "",
        errors:{}

     }
     schema = {
        username: Joi.string().alphanum().min(3).max(30).required(),
        password: Joi.string().required()
        // access_token: [Joi.string(), Joi.number()],
        // birthyear: Joi.number().integer().min(1900).max(2013),
        // email: Joi.string().email()
    }
    
    // Joi.validate({ username: 'abc', birthyear: 1994 }, schema, function (err, value) { });  // err === null -> valid
    // username = React.createRef();

     handleChange = (e) => {
        //clone
        let state = {...this.state}
        // edit
        state[e.currentTarget.name] = e.currentTarget.value;
        // set state
        this.setState(state)

     }
     validate=() =>{
         const errors={};
        //  if (this.state.username.trim() === '')
        //  errors.username = 'User name is required';
        //  if (this.state.password.trim() === '')
        //  errors.password = 'Password is required';


        //  // set state
        //  this.setState({errors})

        //  return Object.keys(errors).length === 0 ? null : errors
       const state = {...this.state}
       delete state.errors;
        const res = Joi.validate(state,this.schema, { abortEarly: false })
        console.log(res);
        if (res.error === null) {       
             this.setState({errors: {}})
              return null
    }

        for (const error of res.error.details){
            errors[error.path] = error.message;
        }

        //set state
        this.setState({errors})
        }
     
    handleSubmit = async (e) =>{
        e.preventDefault();
        // const username = this.username.current.value;
        // console.log("submit");

        const errors = this.validate();

        if (errors) return;
        // back end
        console.log("submit");

        const { data } = await axios.get(
            "http://localhost:8000/admins"
          );
          console.log(data);
          //Clone
        //   const state = { ...this.state };
        // console.log(data[0].name);
        // console.log(data[0].password);
        //   console.log(this.state.password);
        //   console.log(this.state.username);
          // check
          if((this.state.username === data[0].name) && (this.state.password === data[0].password)){
                //redirect
                 this.props.history.push('/admin') 
          }
          else{
              alert("Please make sure that username and password are correct!")
          }
    }


    render() { 
        return ( 
        <React.Fragment>
            <h1>Login</h1>
            <form onSubmit={this.handleSubmit}>
            <div className="mb-3">
                <label htmlFor="username" className="form-label">User name</label>
                <input
                name="username"
                onChange={this.handleChange}
                value={this.state.username}
                type="text" className="form-control" id="username" aria-describedby="usernameHelp" />
                <div id="usernameHelp" className="form-text">We'll never share your user name with anyone else.</div>
                {this.state.errors.username && (<div className="alert alert-danger">{this.state.errors.username}</div>)}
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                name="password"
                onChange={this.handleChange}
                value={this.state.password}
                type="password" className="form-control" id="password" />
                 {this.state.errors.password && (<div className="alert alert-danger">{this.state.errors.password}</div>)}
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            
        </React.Fragment>
        
        
            );
    }
}
 
export default Login;