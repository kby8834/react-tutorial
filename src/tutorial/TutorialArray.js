import React, { Component } from 'react';

class TutorialArray extends Component {
  personId = 1;

  constructor(props) {
    super(props);
    this.state = {
      persons: [],
      keyword: ''
    };

    // 아래 함수에서 this 키워드를 사용하기 위해 바인드 처리를 해준다.
    this.handleCreate = this.handleCreate.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleKeywordChange = this.handleKeywordChange.bind(this);
  }

  handleCreate(e) {
    console.log('handleCreate', e);
    e.preventDefault();

    const persons = this.state.persons;
    this.setState({
      persons: persons.concat({
        id: this.personId++,
        name: e.target.name.value,
        phone: e.target.phone.value
      })
    });
  }

  handleUpdate(id) {
    const persons = this.state.persons;
    this.setState(
      {
        persons: persons.map(person => {
          if (person.id === id) {
            person.name = person.name + ' 수정';
          }

          return person;
        })
      }
    );
  }

  handleRemove(id) {
    const persons = this.state.persons;
    this.setState({persons: persons.filter(person => person.id !== id)});
  }

  handleKeywordChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    const style = {padding: '5rem'};
    const filteredList = this.state.persons.filter(person => person.name.indexOf(this.state.keyword) !== -1);

    return (
      <div style={style}>
        <h1>배열 사용법</h1>
        <form onSubmit={this.handleCreate}>
          <input name="name" placeholder="이름" />&nbsp;
          <input name="phone" placeholder="전화번호" />&nbsp;
          <button type="submit">등록</button>
        </form>

        <hr></hr>
        <input name="keyword" value={this.state.keyword} onChange={this.handleKeywordChange} placeholder="Search Keyword"></input>
        <PersonList persons={filteredList} handleUpdate={this.handleUpdate} handleRemove={this.handleRemove}></PersonList>
      </div>
    );
  }
}

class PersonList extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate');
    
    return nextProps.persons !== this.props.persons;
  }

  render() {
    const tableStyle = {width: '300px', border: '1px solid #000'};
    const tdStyle = {border: '1px solid #000'};

    const row = this.props.persons.map(person => 
      <Person key={person.id} person={person} handleUpdate={this.props.handleUpdate} handleRemove={this.props.handleRemove}></Person>
    );

    return (
      <div>
        {row && row.length > 0 && 
          <div>
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={tdStyle}>ID</th>
                  <th style={tdStyle}>이름</th>
                  <th style={tdStyle}>전화번호</th>
                  <th style={tdStyle}></th>
                </tr>
              </thead>
              <tbody>{row}</tbody>
            </table>
          </div>
        }
      </div>
    );
  }
}

class Person extends Component {
  handleUpdate(e) {
    const id = this.props.person.id;
    this.props.handleUpdate(id);
  }

  handleRemove(e) {
    const id = this.props.person.id;
    this.props.handleRemove(id);
  }

  render() {
    console.log('Person render', this.props.person.id);
    const tdStyle = {border: '1px solid #000'};

    return (
      <tr>
        <td style={tdStyle}>{this.props.person.id}</td>
        <td style={tdStyle}>{this.props.person.name}</td>
        <td style={tdStyle}>{this.props.person.phone}</td>
        <td style={tdStyle}>
          <button onClick={this.handleUpdate.bind(this)}>수정</button>
          <button onClick={this.handleRemove.bind(this)}>삭제</button>
        </td>
      </tr>
    );
  }
}

export default TutorialArray;
