import React from "react";

const Header = props =>{
    console.log(props)
    return(
        <div>
            <div className="navbar">

            </div>
            <div className="jumbotron">
                <h2>
                    Score: {props.score}    High Score: {props.high_score}
                </h2>

                <h3>
                    Don't click the same picture twice!
                </h3>
            </div>
        </div>
    )
}

export default Header;