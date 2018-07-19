import React from "react";

const Header = props =>{
    console.log(props)
    return(
        <p>
            Score: {props.score}    High Score: {props.high_score}
        </p>
    )
}

export default Header;