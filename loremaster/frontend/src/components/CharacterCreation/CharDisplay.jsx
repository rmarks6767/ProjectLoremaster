import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

class CharDisplay extends Component{

    render(){
        return(
            <div className="CharDisplay">
                <div className="headerLeft">
                    <h3>{this.props.name} ({this.props.race} {this.props.class})</h3>
                </div>
                <div className="headerRight">
                    <h4>EXP Points: </h4>
                    <progress id="xp" max={this.props.nextLvlXp} value={this.props.xp}> {this.props.xp}%} </progress>
                </div>
                <div className="Attributes">
                    <h4>Ability Scores:</h4>
                    <div class="str">
                        <h4>STR</h4>
                        <h3>{this.props.str}</h3>
                        <h6>mod</h6>
                        <h5>{this.props.strmod}</h5>
                    </div>
                    <div class="dex">
                        <h4>DEX</h4>
                        <h3>{this.props.dex}</h3>
                        <h6>mod</h6>
                        <h5>{this.props.dexmod}</h5>
                    </div>
                    <div class="con">
                        <h4>CON</h4>
                        <h3>{this.props.con}</h3>
                        <h6>mod</h6>
                        <h5>{this.props.conmod}</h5>
                    </div>
                    <div class="int">
                        <h4>INT</h4>
                        <h3>{this.props.int}</h3>
                        <h6>mod</h6>
                        <h5>{this.props.intmod}</h5>
                    </div>
                    <div class="wis">
                        <h4>WIS</h4>
                        <h3>{this.props.wis}</h3>
                        <h6>mod</h6>
                        <h5>{this.props.wismod}</h5>
                    </div>
                    <div class="cha">
                        <h4>CHA</h4>
                        <h3>{this.props.cha}</h3>
                        <h6>mod</h6>
                        <h5>{this.props.chamod}</h5>
                    </div>
                </div>
            </div>
        )
    }
}

export default CharDisplay;