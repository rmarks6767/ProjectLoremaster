import React, { Component } from 'react';
import axios from 'axios';
import FrontData from 'form-data';
import './Canvas.css';

const tool = {
    BRUSH : 'brush',
    ERASE : 'erase',
    FILL : 'fill',
    SQUARE : 'square'
}

const terrain = {
    BLANK : '#FFFFFF',
    GRASS : '#0C8F00',
    STONE : '#7A7A7A',
    SAND : '#D1CB92',
    DIRT: '#4D4924',
    WATER : '#1897F2',
    LAVA : '#FFB300'
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    let output = "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    return output.toUpperCase();
}

function isTerrain(color){
    switch(color){
        case terrain.BLANK:
        case terrain.GRASS:
        case terrain.STONE:
        case terrain.SAND:
        case terrain.DIRT:
        case terrain.WATER:
        case terrain.LAVA:
            return true;
            break;

        default:
            return false;
            break;
    }
}

class Canvas extends Component{
    canvas = null;
    context = null;
    brushSize = null;

    constructor(props){
        super(props);
        this.state={
            isPainting : false,

            mapWidth : this.props.width,
            mapHeight : this.props.height,
            styleWidth : 0,
            styleHeight : 0,
            canvasName : this.props.canvasName,

            toolMode : tool.BRUSH,
            toolTerrain : terrain.GRASS,
            toolSize : 5,

            prevClick : {x: 0, y: 0},

            isDrawingSquare : false,
            squarePos1 : {x: 0, y: 0},
            squarePos2 : {x: 0, y: 0},

            prevImageData : new Array(),
            numOfSavedData : 5,
            currentImageDataIndex : 0,
        };

        this.canvasOnClick = this.canvasOnClick.bind(this);
        this.canvasOnMove = this.canvasOnMove.bind(this);
        this.canvasOnUp = this.canvasOnUp.bind(this);
        this.canvasOnLeave = this.canvasOnLeave.bind(this);

        this.fill = this.fill.bind(this);
        this.square = this.square.bind(this);
        this.squareFill = this.squareFill.bind(this);

        this.setTool = this.setTool.bind(this);
        this.setTerrain = this.setTerrain.bind(this);
        this.setToolSize = this.setToolSize.bind(this);

        this.addCurrentImageData = this.addCurrentImageData.bind(this);
        this.setCurrentImageData = this.setCurrentImageData.bind(this);
        this.clear = this.clear.bind(this);
        this.undo = this.undo.bind(this);
        this.redo = this.redo.bind(this);
        this.save = this.save.bind(this);
        this.cleanUpAntialiasing = this.cleanUpAntialiasing.bind(this);
    }

    /* Canvas Event Functions */

    canvasOnClick(event){
        let x = (event.pageX - this.canvas.offsetLeft) * (this.canvas.width / this.state.styleWidth);
        let y = (event.pageY - this.canvas.offsetTop) * (this.canvas.height / this.state.styleHeight);
        let toolMode = this.state.toolMode;
        let terrainStyle = this.state.toolTerrain;
        let size = this.state.toolSize;

        console.log(toolMode);


        switch(toolMode){
            case tool.BRUSH:
            case tool.ERASE:
                this.state.isPainting = true;
                this.state.prevClick.x = x;
                this.state.prevClick.y = y;

                this.context.beginPath();

                if(toolMode == tool.BRUSH){
                    this.context.strokeStyle = terrainStyle;
                }
                else{
                    this.context.strokeStyle = terrain.BLANK;
                }
                this.context.lineJoin = "round";
                this.context.lineWidth = size;

                this.context.moveTo(x - .5, y);

                this.context.lineTo(x, y);
                this.context.closePath();
                this.context.stroke();
                break;

            case tool.FILL:
                var imgData = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);

                this.cleanUpAntialiasing(imgData);
                var clickPos = ((Math.floor(y) * this.canvas.width) + Math.floor(x)) * 4;
                console.log("Length: " + imgData.data.length);
                console.log("Click Pos:" + clickPos);
                console.log(imgData.data.length - clickPos);
                this.fill(imgData, this.state.toolTerrain, imgData.data[clickPos], imgData.data[clickPos + 1], imgData.data[clickPos + 2], clickPos);

                this.context.putImageData(imgData, 0, 0);

                break;

            case tool.SQUARE:
                this.state.isDrawingSquare = true;
                this.state.squarePos1.x = x;
                this.state.squarePos1.y = y;
                break;

            default:
                console.log("ERROR: Invalid tool used on canvas");
                break;
        }

        
    }
    
    canvasOnMove(event){
        if(this.state.isPainting && (this.state.toolMode == tool.BRUSH || this.state.toolMode == tool.ERASE)) {
            let x = (event.pageX - this.canvas.offsetLeft) * (this.canvas.width / this.state.styleWidth);
            let y = (event.pageY - this.canvas.offsetTop) * (this.canvas.height / this.state.styleHeight);
            let tool = this.state.toolMode;
            let terrain = this.state.toolTerrain;
            let size = this.state.toolSize;

            this.context.beginPath();

            if(this.state.toolMode == tool.BRUSH){
                this.context.strokeStyle = terrain;
            }
            else{
                this.context.strokeStyle = terrain.BLANK;
            }
            this.context.lineJoin = "round";
            this.context.lineWidth = size;

            this.context.moveTo(this.state.prevClick.x, this.state.prevClick.y);

            this.context.lineTo(x, y);
            this.context.closePath();
            this.context.stroke();

            this.state.prevClick.x = x;
            this.state.prevClick.y = y;
        }
    }
    
    canvasOnUp(event){
        this.state.isPainting = false;

        if(this.state.isDrawingSquare){
            let x = (event.pageX - this.canvas.offsetLeft) * (this.canvas.width / this.state.styleWidth);
            let y = (event.pageY - this.canvas.offsetTop) * (this.canvas.height / this.state.styleHeight);
            let terrain = this.state.toolTerrain;
            let size = this.state.toolSize;

            this.state.squarePos2.x = x;
            this.state.squarePos2.y = y;

            this.square(this.state.squarePos1, this.state.squarePos2, terrain, size);

            this.state.isDrawingSquare = false;
        }

        this.addCurrentImageData();
    }
    
    canvasOnLeave(){
        if(this.state.isPainting){
            this.addCurrentImageData();
        }
        
        this.state.isPainting = false;
    }

    /* Canvas Drawing Tools */

    fill(imageData, terrain, red, green, blue, clickPos){
        var terrainRed = parseInt(terrain.substring(1, 3), 16);
        var terrainGreen = parseInt(terrain.substring(3, 5), 16);
        var terrainBlue = parseInt(terrain.substring(5, 7), 16);
        var lowerPos, lowerBound, higherPos, higherBound;
        var pixelStack = new Array();
        pixelStack.push(clickPos);

        for(var i = 0; i < pixelStack.length; i++){
            var pos = pixelStack[i];
            if(!(red == terrainRed && green == terrainGreen && blue == terrainBlue)){
                lowerPos = pos - 4;
                higherPos = pos + 4;
                lowerBound = pos - (pos % (this.canvas.width * 4));
                higherBound = pos + ((this.canvas.width * 4) - (pos % (this.canvas.width * 4)));


                imageData.data[pos] = terrainRed;
                imageData.data[pos + 1] = terrainGreen;
                imageData.data[pos + 2] = terrainBlue;
                imageData.data[pos + 3] = 255;

                while(lowerPos >= lowerBound && (imageData.data[lowerPos] == red && imageData.data[lowerPos + 1] == green && imageData.data[lowerPos + 2] == blue)){
                    imageData.data[lowerPos] = terrainRed;
                    imageData.data[lowerPos + 1] = terrainGreen;
                    imageData.data[lowerPos + 2] = terrainBlue;
                    imageData.data[lowerPos + 3] = 255;

                    if(imageData.data[lowerPos + (this.canvas.width * 4)] == red && imageData.data[lowerPos + (this.canvas.width * 4) + 1] == green && imageData.data[lowerPos + (this.canvas.width * 4) + 2] == blue){
                        pixelStack.push(lowerPos + (this.canvas.width * 4));
                    }

                    if(imageData.data[lowerPos - (this.canvas.width * 4)] == red && imageData.data[lowerPos - (this.canvas.width * 4) + 1] == green && imageData.data[lowerPos - (this.canvas.width * 4) + 2] == blue){
                        pixelStack.push(lowerPos - (this.canvas.width * 4));
                    }

                    lowerPos -= 4;
                }

                while(higherPos <= higherBound && (imageData.data[higherPos] == red && imageData.data[higherPos + 1] == green && imageData.data[higherPos + 2] == blue)){
                    imageData.data[higherPos] = terrainRed;
                    imageData.data[higherPos + 1] = terrainGreen;
                    imageData.data[higherPos + 2] = terrainBlue;
                    imageData.data[higherPos + 3] = 255;

                    if(imageData.data[higherPos + (this.canvas.width * 4)] == red && imageData.data[higherPos + (this.canvas.width * 4) + 1] == green && imageData.data[higherPos + (this.canvas.width * 4) + 2] == blue){
                        pixelStack.push(higherPos + (this.canvas.width * 4));
                    }

                    if(imageData.data[higherPos - (this.canvas.width * 4)] == red && imageData.data[higherPos - (this.canvas.width * 4) + 1] == green && imageData.data[higherPos - (this.canvas.width * 4) + 2] == blue){
                        pixelStack.push(higherPos - (this.canvas.width * 4));
                    }

                    higherPos += 4;
                }
            }
        }
    }

    square(pos1, pos2, terrain, size){
        this.context.beginPath();

        this.context.strokeStyle = terrain;
        this.context.lineJoin = "round";
        this.context.lineWidth = size;

        this.context.moveTo(pos1.x, pos1.y);
        this.context.lineTo(pos1.x, pos2.y);

        this.context.moveTo(pos1.x, pos2.y);
        this.context.lineTo(pos2.x, pos2.y);

        this.context.moveTo(pos2.x, pos2.y);
        this.context.lineTo(pos2.x, pos1.y);

        this.context.moveTo(pos2.x, pos1.y);
        this.context.lineTo(pos1.x, pos1.y);

        this.context.closePath();
        this.context.stroke();
    }

    squareFill(pos1, pos2, terrain){
        this.context.beginPath();

        this.context.strokeStyle = this.state.toolTerrain;
        this.context.fillStyle = this.state.toolTerrain;
        this.context.lineJoin = "round";
        this.context.lineWidth = this.state.toolSize;

        this.context.moveTo(pos1.x, pos1.y);
        this.context.lineTo(pos1.x, pos2.y);

        this.context.moveTo(pos1.x, pos2.y);
        this.context.lineTo(pos2.x, pos2.y);

        this.context.moveTo(pos2.x, pos2.y);
        this.context.lineTo(pos2.x, pos1.y);

        this.context.moveTo(pos2.x, pos1.y);
        this.context.lineTo(pos1.x, pos1.y);

        this.context.closePath();
        this.context.stroke();
        this.context.fill();
    }

    /* Set Drawing Properties */

    setTool(tool){
        this.state.toolMode = tool;
    }

    setTerrain(terrain){
        this.state.toolTerrain = terrain;
    }

    setToolSize(size){
        this.state.toolSize = size;
    }

    /* Canvas Tools Misc */

    addCurrentImageData(){
        if(this.state.currentImageDataIndex != this.state.prevImageData.length - 1){
            this.state.prevImageData.splice(this.state.currentImageDataIndex + 1);
        }

        this.state.prevImageData.push(this.context.getImageData(0, 0, this.canvas.width, this.canvas.height));

        if(this.state.prevImageData.length > this.state.numOfSavedData){
            this.state.prevImageData.shift();
        }

        this.state.currentImageDataIndex = this.state.prevImageData.length - 1;
    }

    setCurrentImageData(imageData){
        this.context.putImageData(imageData, 0, 0);
    }

    clear(){
        this.context.clearRect(0,0,this.context.canvas.width,this.context.canvas.height);
        this.context.fillStyle = terrain.BLANK;
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.addCurrentImageData();
    }

    undo(){
        if(this.state.currentImageDataIndex > 0){
            this.state.currentImageDataIndex--;
            this.setCurrentImageData(this.state.prevImageData[this.state.currentImageDataIndex]);
        }
    }

    redo(){
        if(this.state.currentImageDataIndex < this.state.prevImageData.length - 1){
            this.state.currentImageDataIndex++;
            this.setCurrentImageData(this.state.prevImageData[this.state.currentImageDataIndex]);
        }
    }

    save(){
        axios({
            method: 'post',
            url: 'http://localhost:5001/chameleon/test',
            headers: {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify("test"),
        })
            .then(response => console.log(response.data));
    }

    cleanUpAntialiasing(imageData){
        for(let y = 0; y < this.canvas.height; y++){
            for(let x = 0; x < this.canvas.width; x++){
                if(!isTerrain(rgbToHex(imageData.data[(y * this.canvas.width + x) * 4], imageData.data[(y * this.canvas.width + x) * 4 + 1], imageData.data[(y * this.canvas.width + x) * 4 + 2]))){

                    if(x < this.canvas.width - 1 && isTerrain(rgbToHex(imageData.data[(y * this.canvas.width + x + 1) * 4], imageData.data[(y * this.canvas.width + x + 1) * 4 + 1], imageData.data[(y * this.canvas.width + x + 1) * 4 + 2]))){
                        imageData.data[(y * this.canvas.width + x) * 4] = imageData.data[(y * this.canvas.width + x + 1) * 4];
                        imageData.data[(y * this.canvas.width + x) * 4 + 1] = imageData.data[(y * this.canvas.width + x + 1) * 4 + 1];
                        imageData.data[(y * this.canvas.width + x) * 4 + 2] = imageData.data[(y * this.canvas.width + x + 1) * 4 + 2];
                    }

                    else if(x > 0 && isTerrain(rgbToHex(imageData.data[(y * this.canvas.width + x - 1) * 4], imageData.data[(y * this.canvas.width + x - 1) * 4 + 1], imageData.data[(y * this.canvas.width + x - 1) * 4 + 2]))){
                        imageData.data[(y * this.canvas.width + x) * 4] = imageData.data[(y * this.canvas.width + x - 1) * 4];
                        imageData.data[(y * this.canvas.width + x) * 4 + 1] = imageData.data[(y * this.canvas.width + x - 1) * 4 + 1];
                        imageData.data[(y * this.canvas.width + x) * 4 + 2] = imageData.data[(y * this.canvas.width + x - 1) * 4 + 2];
                    }

                    else if(y < this.canvas.height - 1 && isTerrain(rgbToHex(imageData.data[((y + 1) * this.canvas.width + x) * 4], imageData.data[((y + 1) * this.canvas.width + x) * 4 + 1], imageData.data[((y + 1) * this.canvas.width + x) * 4 + 2]))){
                        imageData.data[(y * this.canvas.width + x) * 4] = imageData.data[((y + 1) * this.canvas.width + x) * 4];
                        imageData.data[(y * this.canvas.width + x) * 4 + 1] = imageData.data[((y + 1) * this.canvas.width + x) * 4 + 1];
                        imageData.data[(y * this.canvas.width + x) * 4 + 2] = imageData.data[((y + 1) * this.canvas.width + x) * 4 + 2];
                    }

                    else{
                        imageData.data[(y * this.canvas.width + x) * 4] = imageData.data[((y - 1) * this.canvas.width + x) * 4];
                        imageData.data[(y * this.canvas.width + x) * 4 + 1] = imageData.data[((y - 1) * this.canvas.width + x) * 4 + 1];
                        imageData.data[(y * this.canvas.width + x) * 4 + 2] = imageData.data[((y - 1) * this.canvas.width + x) * 4 + 2];
                    }
                }
            }
        }
    }

    render(){
        return(
            <div className="Canvas" width="100%" height={this.state.height}>
                <div className="editorBar" width="1000rem" height="75rem">
                    <button className="btn btn-primary" onClick={() => {this.setTool(tool.BRUSH);}}>Brush</button>
                    <button className="btn btn-primary" onClick={() => {this.setTool(tool.FILL);}}>Fill</button>
                    <button className="btn btn-primary" onClick={() => {this.setTool(tool.SQUARE);}}>SQUARE</button>
                    <button className="btn btn-primary" onClick={() => {this.setTool(tool.ERASE);}}>Erase</button>
                    <button className="btn btn-primary" onClick={() => {this.setTerrain(terrain.GRASS);}}>Grass</button>
                    <button className="btn btn-primary" onClick={() => {this.setTerrain(terrain.STONE);}}>Stone</button>
                    <button className="btn btn-primary" onClick={() => {this.setTerrain(terrain.WATER);}}>Water</button>
                    <input type="range" min="10" max="30" defaultValue="10" class="slider" id="brush-size"/>
                    <button className="btn btn-primary" onClick={this.undo}>Undo</button>
                    <button className="btn btn-primary" onClick={this.redo}>Redo</button>
                    <button className="btn btn-primary" onClick={this.clear}>Clear</button>
                    <button className="btn btn-primary" onClick={this.save}>Save</button>
                </div>
                <canvas id={this.state.canvasName} onMouseDown={this.canvasOnClick} onMouseUp={this.canvasOnUp} onMouseMove={this.canvasOnMove} onMouseLeave={this.canvasOnLeave}></canvas>
            </div>
        );
    }

    componentDidMount(){
        this.canvas = document.querySelector("#" + this.state.canvasName);
        this.context = this.canvas.getContext("2d");
        this.brushSize = document.querySelector("#brush-size");

        this.canvas.width = 1920;
        this.canvas.height = 1080;
        this.canvas.style.width = "1600px";
        this.canvas.style.height = "900px";

        this.state.styleWidth = parseInt(this.canvas.style.width, 10);
        this.state.styleHeight = parseInt(this.canvas.style.height, 10);

        this.context.fillStyle = terrain.BLANK;
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.brushSize.oninput = () => {this.setToolSize(this.brushSize.value);};
        this.context.imageSmoothingEnabled = false;

        this.addCurrentImageData();
    }
}

export default Canvas;