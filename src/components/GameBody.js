import React from "react";
import Picture from "./Picture";
import pictures from "../pictures.json"

class GameBody extends React.Component{
    // Holds each picture and whether or not its been clicked
    state = {
        num_correct = 0
    }

    //initialize state object with pictures set to false
    componentDidMount = () =>{
        pictures.forEach(p => this.setState({[p.name] : false}));
        console.log(this.state);
    }

    //Change clicked to true in state
    handleClick = event =>{
        let clicked = event.target.name;
        console.log(clicked);
        this.setState({
            [clicked] : true
        });
        console.log(this.state);
        if(this.state[clicked]){
            console.log("Already been clicked!")
        }

    }

    render(){
        //Make all picture components
        var pic_elements =  pictures.map((pic, k) =>{
            return <Picture key = {k} 
            click = {this.handleClick} 
            name = {pic.name}
            image = {pic.image} />
        });

        //Random shuffling of picture components
        for (var i = pic_elements.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = pic_elements[i];
            pic_elements[i] = pic_elements[j];
            pic_elements[j] = temp;
        }
        

        return (
            pic_elements
        )
    }
   
}

export default GameBody;