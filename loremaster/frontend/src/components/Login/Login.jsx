import React, { Component } from 'react';
import './Login.css';

class Login extends Component{

    render(){
        return(
            <div className="Login">
                <div className="modal fade" id="login" tabIndex="-1" role="dialog" aria-labelledby="loginLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h3 className="modal-title" id="loginLabel">Project Loremaster Sign In</h3>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <h4 className="login-label"><strong>Username</strong></h4>
                                </div>
                                <div className="row">
                                    <input id="username" className="input input-sm" autoComplete="username"/>
                                </div>
                                <div className="row">
                                    <h4 className="login-label"><strong>Password</strong></h4>
                                </div>
                                <div className="row">
                                    <input id="password" className="input input-sm" autoComplete="current-password"/>
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