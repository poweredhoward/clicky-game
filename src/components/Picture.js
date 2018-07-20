import React from "react";
// import "../images"
import "./Picture.css";


const Picture = props =>{
    return(
        <img className="Pic " src={process.env.PUBLIC_URL + props.image} 
        onClick = {props.click} name = {props.name}/>
    )
}


export default Picture;