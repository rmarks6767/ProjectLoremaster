import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from '../Pages/Landing/Landing';
import Characters from '../Pages/Characters/Characters';
import Maps from '../Pages/Maps/Maps';
import Compendium from '../Pages/Compendium/Compendium';
import Campaigns from '../Pages/Campaigns/Campaigns';
import CharDisplay from '../CharacterCreation/CharDisplay';
import CharEdit from '../CharacterCreation/CharEdit';

class Content extends Component{

    render(){
        return(
            <div className="Content">
                <Switch>
                    <Route path="/characters/charexists" render={() => (<CharDisplay />)}/>
                    <Route path="/characters/charedit" render={() => (<CharEdit />)}/>
                    <Route path="/characters" render={() => (<Characters />)}/>
                    <Route path="/maps" render={() => (<Maps />)}/>
                    <Route path="/campaigns" render={() => (<Campaigns />)}/>
                    <Route path="/compendium" render={() => (<Compendium />)}/>
                    <Route path="" render={() => (<Landing />)}/>
                </Switch>
            </div>
        )
    }
}

export default Content;