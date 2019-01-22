import React, { PureComponent } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass';

export const AuthContext = React.createContext(false);

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        { id: 'sf' ,name: 'Glo', age: 33 },
        { id: 'ar' ,name: 'Rachel', age: 37 },
        { id: 'bt' ,name: 'Florence', age: 2 },
        { id: 'qp' ,name: 'Winter', age: 4 }
      ],
      showPersons: false,
      toggleClicked: 0,
      authenticated: false,
    }
    console.log('[App.js] Inside Constructor', props);
    //This is the more current way to declare state but you can declare it in the constructor. It works the same. 
    // state = {
    //   persons: [
    //     { id: 'sf' ,name: 'Glo', age: 33 },
    //     { id: 'ar' ,name: 'Rachel', age: 37 },
    //     { id: 'bt' ,name: 'Florence', age: 2 },
    //     { id: 'qp' ,name: 'Winter', age: 4 }
    //   ],
    //   showPersons: false
  
    // }
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount', this.props);
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount')
  }

  // shouldComponentUpdate (nextProps, nextState) {
  //   console.log('[Update App.js] Inside shouldComponentUpdate', nextProps, nextState);
  //   return nextState.persons !== this.state.persons ||
  //     nextState.showPersons !== this.state.showPersons;
  // }

  componentWillUpdate ( nextProps, nextState ) {
      console.log(
        '[Update App.js Indside componentWillUpdate', nextProps, 
        nextState
      );
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(
      '[Update App.js] Indside getDerivedStateFromProps', nextProps, 
       prevState
    );
    return prevState;
  }

  getSnapshotBeforeUpdate() {
    console.log(
      '[Update App.js] Indside getSnapshotBeforeUpdate' 
    );
  }

  componentDidUpdate () {
    console.log('[Update App.js Indside componentdidUpdate')
}

  
  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[ personIndex ]
    };
    // This is an alternative to the above. Using ... is more modern but they do they same thing. 
    // const person = Object.assign({}, this.state.persons[personIndex])

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons} )
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( (prevState, props) => {
      return {
       showPersons: !doesShow, 
       toggleClicked: prevState.toggleClicked + 1 
      }
    } );
  }

  loginHandler = () => {
    this.setState({authenticated: true});
  }

  render() {
    console.log('[App.js] Inside Render()')
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons        
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
             />;   
    }
  
    return (
      <Aux>
          <button onClick={ () => { this.setState( { showPersons: true } ) } }>Show Persons</button>
          <Cockpit
            appTitle={this.props.title}
            showPersons={this.state.showPerson}
            persons={this.state.persons}
            login={this.loginHandler}
            clicked={this.togglePersonHandler} />
            <AuthContext.Provider value={this.state.authenticated}>{persons}</AuthContext.Provider>
        </Aux>        
    );
    // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Does this work now?'))
  }
}

export default withClass(App, classes.App);