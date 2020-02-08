import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';

class CharacterLanding extends Component{

    render(){
        return(
            <div className="d-flex flex-row justify-content-around">
                <Link to="/characters/charedit">
                    <div className="border border-primary rounded bg-light btn">
                        <h1 className="mx-3 my-2 nav-link text-primary active">Create New Character</h1>
                    </div>                   
                </Link>
                <Link to="/characters/charexists">
                    <div className="border border-primary rounded bg-light btn">
                        <h1 className="mx-3 my-2 nav-link text-primary active">Load Existing Character</h1>
                    </div>                   
                </Link>
            </div>
        )
    }
}

export default CharacterLanding;