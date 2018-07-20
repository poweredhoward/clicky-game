import React from "react";
import Picture from "./Picture";
import pictures from "../pictures.json";
import Header from "./Header";
// import styles from "../Picture.css";

const styles = {
    backgroundColor: "teal"
}

class GameBody extends React.Component{
    // Holds each picture and whether or not its been clicked
    state = {
        score: 0,
        highScore: 0
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
        //Repeat click, bad move
        if(this.state[clicked]){
            console.log("Already been clicked!");
            this.setState({score: 0});
            this.setState({highScore: 0});

        }
        //good click
        else{
            let currScore = this.state.score;
            let high_Score = this.state.highScore;
            console.log("High: " + high_Score);
            this.setState({score: currScore + 1});
            if(currScore + 1 > this.state.highScore){
                this.setState({highScore: currScore + 1})
            }

        }

    }

    render(){
        //Make all picture components
        var pic_elements =  pictures.map((pic, k) =>{
            return <Picture key = {k} 
            click = {this.handleClick} 
            name = {pic.name}
            image = {pic.image} 
           />
        });

        //Random shuffling of picture components
        for (var i = pic_elements.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = pic_elements[i];
            pic_elements[i] = pic_elements[j];
            pic_elements[j] = temp;
        }
        

        return (
            <div className="container"  style={styles}>
                <Header score={this.state.score} high_score={this.state.highScore} />
                {pic_elements}
            </div>
        )
    }
   
}

export default GameBody;