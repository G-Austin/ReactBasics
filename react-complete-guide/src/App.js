import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Glo', age: 33 },
      { name: 'Rachel', age: 37 },
      { name: 'KC', age: 40 },
      { name: 'Leanna', age: 39 }
    ]

  }

  switchNameHandler = (newName) => {
    //console.log('Was clicked')
    // DON'T DO THIS this.state.persons[0].name = 'Maximillion';
    this.setState({
      persons: [
        { name: newName, age: 33 },
        { name: 'Rachel', age: 37 },
        { name: 'KC', age: 40 },
        { name: 'Leanna', age: 27 }
      ],
      
    } )
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Glo', age: 33 },
        { name: event.target.value, age: 37 },
        { name: 'KC', age: 40 },
        { name: 'Leanna', age: 27 }
      ],
      
    } )
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <h1>Still making components</h1>
        <p>This is really working too!</p>
        <button onClick={() => this.switchNameHandler('Glo-Rida!!')} >Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          >My Hobbies: Nerding out in React </Person>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Glo!')} 
          changed={this.nameChangedHandler} />
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
        <Person 
          name={this.state.persons[3].name} 
          age={this.state.persons[3].age} />
      </div>
    );
    // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Does this work now?'))
  }
}

export default App;
