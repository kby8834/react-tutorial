import React from 'react';

class TutorialRef extends React.Component {

    constructor(props) {
        super(props);

        this.input = null;
        this.handleFocus = this.handleFocus.bind(this);
    }

    handleFocus() {
        console.log('handleFocus');
        this.input.focus();
    }

    render() {
        return (
            <div>
                <h1>ref 사용법</h1>
                <input ref={ref => {this.input = ref}}></input>
                <button onClick={this.handleFocus}>포커스</button>
            </div>
        );
    }

}

export default TutorialRef;
