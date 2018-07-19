import React from "react";
// import "../images"

const Picture = props =>{
    return(
        <img src={process.env.PUBLIC_URL + props.image} 
        onClick = {props.click} name = {props.name}/>
    )
}


export default Picture;