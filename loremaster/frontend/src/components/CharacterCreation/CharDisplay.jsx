import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import LinearProgress from '@material-ui/core/LinearProgress';

class CharDisplay extends Component{

    constructor(props){
        super(props);
    }

    

    render(){
        
        return(
            <div className="CharDisplay">
                <div className="headerLeft">
                    <h3>{this.props.character.name} ({this.props.character.race} {this.props.character.dndclass})</h3>
                </div>
                <div className="headerRight">
                    <h4>EXP Points: </h4>
                    <LinearProgress id="xp" variant="determinate" value={this.props.character.getNormalizedLevel(this.props.character.xp)}/>
                </div>
                <div className="Attributes">
                    <h4>Ability Scores:</h4>
                    <div className="str">
                        <h4>STR</h4>
                        <h3>{this.props.character.str}</h3>
                        <h6>mod</h6>
                        <h5 id="strMod"></h5>
                    </div>
                    <div className="dex">
                        <h4>DEX</h4>
                        <h3>{this.props.character.dex}</h3>
                        <h6>mod</h6>
                        <h5 id="dexMod"></h5>
                    </div>
                    <div className="con">
                        <h4>CON</h4>
                        <h3>{this.props.character.con}</h3>
                        <h6>mod</h6>
                        <h5 id="conMod"></h5>
                    </div>
                    <div className="int">
                        <h4>INT</h4>
                        <h3>{this.props.character.int}</h3>
                        <h6>mod</h6>
                        <h5 id="intMod"></h5>
                    </div>
                    <div className="wis">
                        <h4>WIS</h4>
                        <h3>{this.props.character.wis}</h3>
                        <h6>mod</h6>
                        <h5 id="wisMod"></h5>
                    </div>
                    <div className="cha">
                        <h4>CHA</h4>
                        <h3>{this.props.character.cha}</h3>
                        <h6>mod</h6>
                        <h5 id="chaMod"></h5>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount(){
        document.getElementById("strMod").innerHTML = this.props.character.getMod(this.props.character.str);
        document.getElementById("dexMod").innerHTML = this.props.character.getMod(this.props.character.dex);
        document.getElementById("conMod").innerHTML = this.props.character.getMod(this.props.character.con);
        document.getElementById("intMod").innerHTML = this.props.character.getMod(this.props.character.int);
        document.getElementById("wisMod").innerHTML = this.props.character.getMod(this.props.character.wis);
        document.getElementById("chaMod").innerHTML = this.props.character.getMod(this.props.character.cha);
    }
}

export default CharDisplay;