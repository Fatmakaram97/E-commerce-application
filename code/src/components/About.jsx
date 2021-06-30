import React, { Component } from 'react';
import {Route , Link} from 'react-router-dom';
import Team from './team';
import Company from './company';

class About extends Component {
    
    render() { 
        return ( 
        <React.Fragment>
        <h1>About us</h1>
           <div className="row">
                <div className="col-3">
                <ul>
                    <li>
                         <Link to="/about/team">Our team</Link>
                    </li>
                    <li>
                          <Link to="/about/company">Our company</Link>
                    </li>
                 </ul>

                </div>
                <div className="col">
                 <Route path="/about/team" component={Team} />
                 <Route path="/about/company" component={Company} />

                </div>
           </div>


            
            </React.Fragment>
            );
    }
}
 
export default About;