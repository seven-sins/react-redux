/**
 * Created by seven sins on 1/7/2017.
 */
import React, { Component, PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

class Home extends Component{
    render = () =>{
        return(
            <div>
                home
                <Link to="/user" >user</Link>
            </div>
        )
    }
}

export default Home;
