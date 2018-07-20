import React from "react";

const styles={
    height: "100px",
    padding: "10px"
}

const Header = props =>{
    console.log(props)
    return(
            <div style={styles} className="jumbotron text-center">
                <h2>
                    Score: {props.score}    High Score: {props.high_score}
                </h2>

                <h3>
                    Don't click the same picture twice!
                </h3>
            </div>
    )
}

export default Header;