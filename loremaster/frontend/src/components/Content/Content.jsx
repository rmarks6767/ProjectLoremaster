import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Landing from '../Landing/Landing';
import Characters from '../Characters/Characters';
import Maps from '../Maps/Maps';
import Compendium from '../Compendium/Compendium';
import Campaigns from '../Campaigns/Campaigns';

class Content extends Component{

    render(){
        return(
            <div className="Content">
                <Route path="/home" render={() => (<Landing />)}/>
                <Route path="/characters" render={() => (<Characters />)}/>
                <Route path="/maps" render={() => (<Maps />)}/>
                <Route path="/campaigns" render={() => (<Campaigns />)}/>
                <Route path="/compendium" render={() => (<Compendium />)}/>
            </div>
        )
    }
}

export default Content;