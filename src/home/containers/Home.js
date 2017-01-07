/**
 * Created by seven sins on 1/7/2017.
 */
import React, { Component, PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

class Home extends Component{
    render = () =>{
        return(
            <div>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="user">User</Link></li>
                    </ul>
                </div>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Home;
