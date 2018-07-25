import React, { Component } from 'react';

class ContactList extends React.Component {
  render() {
    const people = this.props.contacts

    return <ol>
      {people.map(person => (
        <li key={person.name}>{person.name}</li>
      ))}
    </ol>
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <ContactList contacts={[
          { name: 'Diego Slompo' },
          { name: 'Nicola Tesla' },
          { name: 'Copernico' }
        ]}/>
        <ContactList contacts={[
          { name: 'Alan Turing' },
          { name: 'Marcus Lemonis' },
          { name: 'Renato Augusto' }
        ]}/>
      </div>
    );
  }
}

export default App;