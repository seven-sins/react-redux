/**
 * Created by seven sins on 1/10/2017.
 */
import React, { Component } from 'react';

export const http = {
    srvUrl: "http://localhost:3001",
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json; charset=UTF-8"
    },
    LOAD: "LOADDATA",
    INSERT: "INSERT",
    UPDATE: "UPDATE",
    RESET: "RESET"
};

export class Base extends Component {
    constructor(props, context){
        super(props, context);
        this.state = {
            dialog: ''
        };
    }
    dialog = (view) => {
        view = view ? view : "";
        this.setState({
            dialog: view
        })
    };
    method = () => {
        return {
            ...this,
            ...this.props
        }
    }
}
