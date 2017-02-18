/**
 * Created by seven sins on 2/18/2017.
 */
import React, { Component } from 'react';
import '../assets/sevensins/seven.js';
import '../assets/sevensins/seven.css';
import './less/index.less';
import 'font-awesome-webpack';
import Top from './component/Top';
import Head from './component/Head';
import Center from './component/Center';

class Index extends Component {
    constructor(props, context) {
        super(props, context);
    }
    render = () => {
        return(
            <div>
                <Top />
                <Head />
                <Center />
            </div>
        )
    }
}
export default Index;