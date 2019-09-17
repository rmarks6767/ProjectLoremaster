import React, { Component } from 'react';

var isPainting = false;
var clickX = new Array();
var clickY = new Array();
var clickDrag = new Array();

class Canvas extends Component{

    canvasOnClick(event){
        isPainting = true;

        this.addClick(event.pageX - this.offsetLeft, event.pageY - this.offsetTop, false);
        this.redraw();

        console.log("Mosue Click");
    }

    canvasOnMove(event){
        if(isPainting) {
            this.addClick(event.pageX - this.offsetLeft, event.pageY - this.offsetTop, true);
            this.redraw();

            console.log("Mosue Move");
        }
    }

    canvasOnUp(){
        isPainting = false;
        console.log("Mosue Up");
    }

    canvasOnLeave(){
        isPainting = false;
        console.log("Mosue Leave");
    }

    addClick(x, y, drag){
        clickX.push(x);
        clickY.push(y);
        clickDrag.push(drag);
    }

    redraw(){
        this.context.clearRect(0, 0, this.props.width, this.props.height);

        this.context.strokeStyle = "#df4b26";
        this.context.lineJoin = "round";
        this.context.lineWidth = 5;

        for(var i = 0; i < clickX.length; i++) {
            if(clickDrag[i] && i) {
                this.context.moveTo(clickX[i-1], clickY[i-1]);
            }
            else{
                this.context.moveTo(clickX[i] - 1, clickY[i]);
            }

            this.context.lineTo(clickX[i], clickY[i]);
            this.context.closePath();
            this.context.stroke();
        }
    }

    render(){
        return(
            <div className="Canvas" width={this.props.width} height={this.props.height}>
                <canvas id={this.props.canvasName} ref={(c) => this.context = c.getContext('2d')} width={this.props.width} height={this.props.height} onMouseDown={this.canvasOnClick} onMouseUp={this.canvasOnUp} onMouseMove={this.canvasOnMove} onMouseLeave={this.canvasOnLeave}></canvas>
            </div>
        );
    }
}

export default Canvas;