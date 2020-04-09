import React, { Component } from "react";

class TutorialStyle extends Component {
    render() {
        const style = {
            backgroundColor: 'aqua',
            color: 'white'
        };

        return (
            <div style={style}>Hello, React!</div>
        );
    }
}

export default TutorialStyle;
