import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component{
    
    render(){
        return(
            <footer className="Footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 text-right">
                            <a href="https://github.com/rmarks6767/ProjectLoremaster/tree/master" target="_blank"><p>Github</p></a>
                        </div>
                        <div className="col-sm-6 text-left">
                            <p>About</p>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;