import React, { Component } from 'react';
import './Login.css';

class Login extends Component{

    render(){
        return(
            <div className="Login">
                <div className="modal fade" id="login">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">

                            <div className="modal-header">
                                <h1>Project Loremaster</h1>
                            </div>

                            <div className="modal-body">
                                <div className="form-group">
                                    <label className="float-left" htmlFor="user">Email:</label>
                                    <input type="email" className="form-control-plaintext bg-light" id="usr"/>

                                    <label className="float-left" htmlFor="pwd">Password:</label>
                                    <input type="password" className="form-control-plaintext bg-light" id="pwd"/>
                                </div>
                            </div>

                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary">Sign In</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;