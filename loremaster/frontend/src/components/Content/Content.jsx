import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Landing from '../Pages/Landing/Landing';
import Characters from '../Pages/Characters/Characters';
import Maps from '../Pages/Maps/Maps';
import Compendium from '../Pages/Compendium/Compendium';
import Campaigns from '../Pages/Campaigns/Campaigns';

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