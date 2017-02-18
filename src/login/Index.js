/**
 * Created by seven sins on 2/11/2017.
 */
import React, { Component } from 'react';
import '../assets/sevensins/seven.js'
import '../assets/sevensins/seven.css';
import { http } from '../common/common';

class Index extends Component{
    constructor(props, context){
        super(props, context);
    }
    componentDidMount = () => {
        s.login({
            submit:function(user){
                s.post(http.srvUrl + "/doLogin", JSON.stringify(user), function(res){
                    if(res.code == 0){
                        s.msg("登录成功");
                        let token = res.data.passWord;
                        s.cookie.add("token", token);
                        window.location.href = http.localUrl + "/main";
                    }else{
                        s.msg(res.message);
                    }
                });
            },
            forget:function(){

            },
            userName:'用户名/邮箱/手机号',
            passWord:'请输入密码',
            showForget:false,
            showRemember:false
        });
    };
    render = () => {
        return (
            <div> </div>
        )
    }
}
export default Index;
