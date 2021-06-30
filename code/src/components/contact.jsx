import React, { Component } from 'react';

class Contact extends Component {
    state = {  }
    render() { 
        return ( 
        <React.Fragment>
        <h1>Contact us</h1> 
        <h3>You can contact us using:</h3>
        <ul>
            <li>Phone on: +20 111 222 5555</li>
            <li>Email: onlineStore@gmail.com</li>
        </ul>
        <p>We will response on mail within 24 hr.</p>
        </React.Fragment>
        );
    }
}
 
export default Contact;