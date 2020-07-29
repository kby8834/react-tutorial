import React from 'react';

/**
 * DOM 에 직접 접근이 필요할 경우 ref 사용
 */
class TutorialRef extends React.Component {

    constructor(props) {
        super(props);

        this.input = null;
        this.handleFocus = this.handleFocus.bind(this);

        // textInput DOM 엘리먼트를 저장하기 위한 ref를 생성합니다.
        this.textInput = React.createRef();
        this.focusTextInput = this.focusTextInput.bind(this);
    }

    handleFocus() {
        console.log('handleFocus');
        this.input.focus();
    }

    focusTextInput() {
        // DOM API를 사용하여 명시적으로 text 타입의 input 엘리먼트를 포커스합니다.
        // 주의: 우리는 지금 DOM 노드를 얻기 위해 "current" 프로퍼티에 접근하고 있습니다.
        this.textInput.current.focus();
    }

    render() {
        // React에게 우리가 text 타입의 input 엘리먼트를
        // 우리가 생성자에서 생성한 `textInput` ref와 연결하고 싶다고 이야기합니다.
        return (
            <div>
                <div>
                    <h1>ref 사용법(DOM 에 직접 접근이 필요할 경우)</h1>
                    <input ref={ref => { this.input = ref }}></input>
                    <button onClick={this.handleFocus}>포커스</button>
                </div>
                <div>
                    <input
                        type="text"
                        ref={this.textInput} />
                    <input
                        type="button"
                        value="Focus the text input"
                        onClick={this.focusTextInput}
                    />
                </div>
            </div>
        );
    }

}

export default TutorialRef;
