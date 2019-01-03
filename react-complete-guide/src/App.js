import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'sf' ,name: 'Glo', age: 33 },
      { id: 'ar' ,name: 'Rachel', age: 37 },
      { id: 'bt' ,name: 'Florence', age: 2 },
      { id: 'qp' ,name: 'Winter', age: 4 }
    ],
    showPersons: false

  }
  
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
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
    this.setState({showPersons: !doesShow});
  }

  render() {

    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
        {this.state.persons.map((person, index) => {
          return <Person 
                click={() =>this.deletePersonHandler(index)}
                name={person.name} 
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)} />
        })}
       </div>
      );
      btnClass = classes.Red;
    }
    let assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red); //classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold); //classes = ['red', 'bold']
    }
    return (
        <div className={classes.App}>
          <h1>Hi, I'm a React App</h1>
          <h1>Still making components</h1>
          <p className={assignedClasses.join(' ')}>This is really working too!</p>
          <button 
          className={btnClass}
          onClick={this.togglePersonHandler} >Switch Name</button>
          {persons}
          
        </div>
     
    );
    // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Does this work now?'))
  }
}

export default App;