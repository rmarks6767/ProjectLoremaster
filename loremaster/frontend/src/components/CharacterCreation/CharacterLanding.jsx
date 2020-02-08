import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';

class CharacterLanding extends Component{

    render(){
        return(
            <div className="CharLanding">
                <Link to="/characters/charedit"><button className="NewCharButton">
                    
                </button></Link>
                <Link to="/characters/charexists"><button className="DispCharButton">
                    
                </button></Link>
            </div>
        )
    }
}

export default CharacterLanding;