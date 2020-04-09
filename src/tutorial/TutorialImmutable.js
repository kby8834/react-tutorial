import React, { Component } from 'react';
import { Map, List } from 'immutable';

//const { Map } = require('immutable');

/**
 * Map
 */
const person1 = Map({
   name: '000',
   phone: '000-0000-0000',
   brothers: Map({name: '001'})
});

// set
console.log('---------- set ----------');
const person2 = person1.set('name', '111').set('phone', '111-1111-1111');
console.log('person1', person1.toJS());
console.log('person2', person2.toJS());
console.log('person1 === person2', person1 === person2);

// get
console.log('---------- get ----------');
console.log('person2:name', person2.get('name'));
console.log('person2:phone', person2.get('phone'));

// setIn
console.log('---------- setIn ----------');
const person3 = person1.setIn(['brothers', 'name'], '002');
console.log('person1', person1.toJS());
console.log('person3', person3.toJS());
console.log('person1 === person3', person1 === person3);

// getIn
console.log('---------- getIn ----------');
console.log('person3:brothers:name', person3.getIn(['brothers', 'name']));

// delete
console.log('---------- delete ----------');
const deletedObj = person1.delete('brothers');
console.log(person1.toJS());
console.log(deletedObj.toJS());
console.log('person1 === deletedObj', person1 === deletedObj);

/**
 * List
 */
const personList = List([
  Map({name: '000'}),
  Map({name: '111'})
]);
console.log('personList', personList.toJS());

class TutorialImmutable extends Component {
  constructor(props) {
    // console.log('constructor');

    super(props);
    this.state = {number: 1};
  }

  render() {
    // console.log('render');

    return (
      <div>
        <h1>Immutable Library</h1>
      </div>
    );
  }
}

export default TutorialImmutable;
