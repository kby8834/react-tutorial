import React, { Component } from 'react';

class App_Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phone: ''
    };

    // 아래 함수에서 this 키워드를 사용하기 위해 바인드 처리를 해준다.
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    console.log('handleChange');

    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    console.log('handleSubmit');

    e.preventDefault();
  }

  render() {
    const style = {padding: '5rem'};
    const style1 = {padding: '0.1rem'};

    return (
      <div style={style}>
        <h1>폼 사용법</h1>
        <form onSubmit={this.handleSubmit}>
          <div style={style1}><input name="name" value={this.state.name} onChange={this.handleChange} placeholder="이름" /></div>
          <div style={style1}><input name="phone" value={this.state.phone} onChange={this.handleChange} placeholder="전화번호" /></div>
          <div style={style1}><button type="submit">등록</button></div>
        </form>
      </div>
    );
  }
}

export default App_Form;
