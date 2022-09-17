import { React } from 'react';
import ContactItem from './ContactItem/ContactItem';
import { ContactListBlock } from './ContactList.styled';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ContactListBlock>
      {contacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} onDelete={onDelete} />
      ))}
    </ContactListBlock>
  );
};
export default ContactList;
