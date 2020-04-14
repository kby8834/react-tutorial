import React from 'react';

/**
 * DOM 에 직접 접근이 필요할 경우 ref 사용
 */
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
                <h1>ref 사용법(DOM 에 직접 접근이 필요할 경우)</h1>
                <input ref={ref => {this.input = ref}}></input>
                <button onClick={this.handleFocus}>포커스</button>
            </div>
        );
    }

}

export default TutorialRef;
