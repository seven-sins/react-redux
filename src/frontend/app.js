/**
 * Created by javaDev on 2017/2/4.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Index from './Index';

const render = () =>{
    ReactDOM.render(
        <Index />,
        document.getElementById('app')
    );
};
render();