import React, { Component } from 'react';
import './Login.css';

class Login extends Component{

    render(){
        return(
            <div className="Login">
                <div class="modal fade" id="login" tabindex="-1" role="dialog" aria-labelledby="loginLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h3 class="modal-title" id="loginLabel">Project Loremaster Sign In</h3>
                            </div>
                            <div class="modal-body">
                                <div className="row">
                                    <h4 className="login-label"><strong>Username</strong></h4>
                                </div>
                                <div className="row">
                                    <input id="username" className="input input-sm" autoComplete="username"></input>
                                </div>
                                <div className="row">
                                    <h4 className="login-label"><strong>Password</strong></h4>
                                </div>
                                <div className="row">
                                    <input id="password" className="input input-sm" autoComplete="current-password"></input>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-primary">Sign In</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;