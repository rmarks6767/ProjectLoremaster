import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Login from '../Login/Login';
import loginIcon from '../../imgs/login_icon.svg';

class Navbar extends Component{

    constructor(props){
        super(props);
        this.state = {
            navItems : document.getElementsByClassName("nav-link"),
        };
        this.setLinkActive = this.setLinkActive.bind(this);
        this.setLinkActiveSwitch = this.setLinkActiveSwitch.bind(this);
    }

    setLinkActive(){
        if(this.state.navItems == null){
            this.state.navItems = document.getElementsByClassName("nav-link");
        }
        else{
            setTimeout( this.setLinkActiveSwitch, 10);
        }
    }

    setLinkActiveSwitch(){
        switch(window.location.pathname){
            case "/home":
                for(var i = 0; i < this.state.navItems.length; i++){
                    this.state.navItems[i].className = "nav-link";
                }
                this.state.navItems[0].className = "nav-link active";
                break;

            case "/characters":
                for(var i = 0; i < this.state.navItems.length; i++){
                    this.state.navItems[i].className = "nav-link";
                }
                this.state.navItems[1].className = "nav-link active";
                break;

            case "/maps":
                for(var i = 0; i < this.state.navItems.length; i++){
                    this.state.navItems[i].className = "nav-link";
                }
                this.state.navItems[2].className = "nav-link active";
                break;

            case "/campaigns":
                for(var i = 0; i < this.state.navItems.length; i++){
                    this.state.navItems[i].className = "nav-link";
                }
                this.state.navItems[3].className = "nav-link active";
                break;

            case "/compendium":
                for(var i = 0; i < this.state.navItems.length; i++){
                    this.state.navItems[i].className = "nav-link";
                }
                this.state.navItems[4].className = "nav-link active";
                break;

            default:
                console.log("Error: Invalid Page");
                break;
        }
    }

    render(){
        return(
            <div className="Navbar">
                <nav className="navbar navbar-expand-lg bg-light navbar-light">
                    <a className="navbar-brand">Project Loremaster</a>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbar">
                        <ul className="navbar-nav nav-tabs">
                            <li className="nav-item"><Link className="nav-link" to="/home" onClick={this.setLinkActive}>Home</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/characters" onClick={this.setLinkActive}>Characters</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/maps" onClick={this.setLinkActive}>Maps</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/campaigns" onClick={this.setLinkActive}>Campaigns</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/compendium" onClick={this.setLinkActive}>Compendium</Link></li>
                        </ul>
                        <button type="button" className="btn btn-primary ml-auto" data-toggle="modal" data-target="#login" id="sign-in"><img src={loginIcon} alt="Login Icon" width="20rem;"/>Sign In</button>
                    </div>
                </nav>
                <Login />
            </div>
        );
    }

    componentDidMount(){
        this.setLinkActive();
    }
}
export default Navbar;