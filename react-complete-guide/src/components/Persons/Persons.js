import React, { Component } from 'react';
import Person from './Person/Person'

class Persons extends Component {
    constructor(props) {
        super(props);
        console.log('[Persons.js] Inside Constructor', props);
      }
    
      componentWillMount () {
        console.log('[Persons.js] Inside componentWillMount', this.props);
      }
    
      componentDidMount () {
        console.log('[Persons.js] Inside componentDidMount');
      }

      componentWillReceiveProps (nextProps) {
          console.log('[Update Persons.js] Inside ComponentWillRecieveProps', nextProps);
      }

      shouldComponentUpdate (nextProps, nextState) {
          console.log('[Update Perons.js] Inside shouldComponentUpdate', nextProps, nextState);
        //   return nextProps.person !== this.props.persons;
        return true;
      }

      componentWillUpdate (nextProps, nextState) {
          console.log('[Update Persons.js Indside componentWillUpdate', nextProps, nextState)
      }

      componentDidUpdate () {
        console.log('[Update Persons.js Indside componentdidUpdate')
      }
    
        render() {
            console.log('[Persons.js] Inside render()')

            return this.props.persons.map( ( person, index ) => {
                return <Person 
                      click={() => this.props.clicked( index )}
                      name={person.name} 
                      age={person.age}
                      key={person.id}
                      changed={(event) => this.props.changed( event, person.id ) } />
        } ); 
    };
}

export default Persons;
