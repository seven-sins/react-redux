/**
 * Created by seven sins on 1/7/2017.
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as ActionCreators from '../actions';

@connect( state =>({user: state.User}), ActionCreators )
class User extends Component{
    constructor(props, context){
        super(props, context);
        this.insert = this.insert.bind(this);
    }
    insert = (ev) =>{
        ev.preventDefault();
        let user = {
            id: this.refs.id.value,
            userName: this.refs.userName.value,
            passWord: this.refs.passWord.value
        };
        this.props.insert(user);
    };
    render = () =>{
        let { user } = this.props;
        return(
            <div>
                <p>
                    Id: <input type='text' defaultValue={ user.id } ref='id' />
                </p>
                <p>
                    userName:<input type='text'  defaultValue={ user.userName } ref='userName'  />
                </p>
                <p>
                    passWord:<input type='text'  defaultValue={ user.passWord } ref='passWord'  />
                </p>

                <button onClick={this.insert} >insert</button>
            </div>
        )
    }
}
User.propTypes = {
    //insert: PropTypes.func.isRequired
};
export default User;
