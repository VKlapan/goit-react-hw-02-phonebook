import { React, Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(prevStat => ({
      contacts: [newContact, ...prevStat.contacts],
    }));
  };

  findContact = searchName => {
    const foundContacts = this.state.contacts.filter(contact =>
      contact.name.includes(searchName)
    );
    console.log(foundContacts);
  };

  styleDefault = {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    color: '#010101',
  };

  render() {
    return (
      <div style={this.styleDefault}>
        React homework template
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter onSearch={this.findContact} />
        <ContactList contacts={this.state.contacts} />{' '}
      </div>
    );
  }
}

export default App;
