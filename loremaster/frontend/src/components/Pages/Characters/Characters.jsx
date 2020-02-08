import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import CharDisplay from '../../CharacterCreation/CharDisplay';
import CharEdit from '../../CharacterCreation/CharEdit';
import CharacterLanding from '../../CharacterCreation/CharacterLanding';

class Characters extends Component{
    render(){
        return(
            <div>
                <div className="jumbotron text-center">
                    <h1>Characters</h1>
                </div>

                <CharacterLanding />
            </div>
        );
    }
}

export default Characters;