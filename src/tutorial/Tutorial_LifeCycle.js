import React, { Component } from 'react';

class Tutorial_LifeCycle extends Component {
  constructor(props) {
    console.log('constructor');

    super(props);
    this.state = {number: 1};

    // 아래 함수에서 this 키워드를 사용하기 위해 바인드 처리를 해준다.
    this.handleIncrease = this.handleIncrease.bind(this);
    this.handleDecrease = this.handleDecrease.bind(this);
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate');
    console.log('nextProps', nextProps);
    console.log('nextState', nextState);

    // 3의 배수라면 렌더링 하지 않음
    if(nextState.number % 3 === 0) {
      return false;
    }

    return true;
  }

  componentWillUpdate() {
    console.log('componentWillUpdate');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  handleIncrease() {
    const _number = this.state.number;
    this.setState({number: _number + 1});
  }

  handleDecrease() {
    const _number = this.state.number;
    this.setState({number: _number - 1});
  }

  render() {
    const style = {padding: '5rem'};

    return (
      <div style={style}>
        <h1>컴포넌트 생명주기</h1>
        <input value={this.state.number} readOnly></input>&nbsp;
        <button onClick={this.handleIncrease}>+</button>
        <button onClick={this.handleDecrease}>-</button>
      </div>
    );
  }
}

export default Tutorial_LifeCycle;
