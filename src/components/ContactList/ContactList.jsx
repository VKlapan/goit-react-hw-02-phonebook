import { React, Component } from 'react';
import ContactItem from './ContactItem/ContactItem';

class ContactList extends Component {
  constructor({ contacts }) {
    super();
    this.contacts = contacts;
    console.log(contacts);
  }
  render() {
    return (
      <ul>
        {this.contacts.map(contact => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </ul>
    );
  }
}
export default ContactList;
