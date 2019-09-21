import React, { Component } from 'react';
import './Canvas.css';

class Canvas extends Component{
    canvas = null;
    context = null;

    constructor(props){
        super(props);
        this.state={
            isPainting : false,
            clicks : new Array(),
            width : this.props.width,
            height : this.props.height,
            canvasName : this.props.canvasName
        };

        this.canvasOnClick = this.canvasOnClick.bind(this);
        this.canvasOnMove = this.canvasOnMove.bind(this);
        this.canvasOnUp = this.canvasOnUp.bind(this);
        this.canvasOnLeave = this.canvasOnLeave.bind(this);
        this.addClick = this.addClick.bind(this);
        this.refresh = this.refresh.bind(this);
    }

    canvasOnClick(event){
        if(this.canvas == null || this.context == null) {
            this.canvas = document.getElementById(this.state.canvasName);
            this.context = this.canvas.getContext("2d");
        }
        else {
            this.state.isPainting = true;
        
            this.addClick(event.pageX - this.canvas.offsetLeft, event.pageY - this.canvas.offsetTop, false);

            this.context.strokeStyle = "#df4b26";
            this.context.lineJoin = "round";
            this.context.lineWidth = 5;

            this.context.moveTo(this.state.clicks[this.state.clicks.length - 1].xpos - 1, this.state.clicks[this.state.clicks.length - 1].ypos);

            this.context.lineTo(this.state.clicks[this.state.clicks.length - 1].xpos, this.state.clicks[this.state.clicks.length - 1].ypos);
            this.context.closePath();
            this.context.stroke();
        
            console.log("Mosue Click:", event.pageX - this.canvas.offsetLeft, event.pageY - this.canvas.offsetTop);
        }
    }
    
    canvasOnMove(event){
        if(this.canvas == null || this.context == null) {
            this.canvas = document.getElementById(this.state.canvasName);
            this.context = this.canvas.getContext("2d");
        }
        else {
            if(this.state.isPainting) {
                this.addClick(event.pageX - this.canvas.offsetLeft, event.pageY - this.canvas.offsetTop, true);

                this.context.strokeStyle = "#df4b26";
                this.context.lineJoin = "round";
                this.context.lineWidth = 5;

                this.context.moveTo(this.state.clicks[this.state.clicks.length - 2].xpos, this.state.clicks[this.state.clicks.length - 2].ypos);

                this.context.lineTo(this.state.clicks[this.state.clicks.length - 1].xpos, this.state.clicks[this.state.clicks.length - 1].ypos);
                this.context.closePath();
                this.context.stroke();
        
                console.log("Mosue Move");
            }
        }
    }
    
    canvasOnUp(){
        this.state.isPainting = false;
        console.log("Mosue Up");
    }
    
    canvasOnLeave(){
        this.state.isPainting = false;
        console.log("Mosue Leave");
    }
    
    addClick(x, y, drag){
        if(drag) {
            this.state.clicks.push({xpos : x, ypos : y, prev : this.state.clicks[this.state.clicks.length - 1]});
        }
        else {
            this.state.clicks.push({xpos : x, ypos : y, prev : -1});
        }
    }

    refresh() {
        this.context.clearRect(0,0,this.context.canvas.width,this.context.canvas.height);

        for(var i = 0; i < this.state.clicks.length; i++) {
            this.context.strokeStyle = "#df4b26";
            this.context.lineJoin = "round";
            this.context.lineWidth = 5;
            if(this.state.clicks[i].prev == -1) {
                this.context.moveTo(this.state.clicks[i].prev.xpos, this.state.clicks[i].prev.ypos);
            }
            else {
                this.context.moveTo(this.state.clicks[i].xpos - 1, this.state.clicks[i].ypos);
            }
            
            this.context.lineTo(this.state.clicks[i].xpos, this.state.clicks[i].ypos);
            this.context.closePath();
            this.context.stroke();
        }
    }

    render(){
        return(
            <div className="Canvas" width="100%" height={this.state.height}>
                <div className="editorBar" width={this.state.width} height={this.state.height}>
                    <button className="btn btn-simple">Red</button>
                    <button className="btn btn-simple">Blue</button>
                    <button className="btn btn-simple" onClick={this.refresh}>Test</button>
                </div>
                <canvas id={this.state.canvasName} width={this.state.width} height={this.state.height} onMouseDown={this.canvasOnClick} onMouseUp={this.canvasOnUp} onMouseMove={this.canvasOnMove} onMouseLeave={this.canvasOnLeave}></canvas>
            </div>
        );
    }
}

export default Canvas;