import { ContactItemElement, ItemContent } from './ContactItem.styled';

const ContactItem = ({ contact, onDelete }) => {
  const { id, name, number } = contact;

  return (
    <ContactItemElement>
      <ItemContent>{name}</ItemContent>
      <ItemContent>{number}</ItemContent>
      <button onClick={() => onDelete(id)}> DELETE</button>
    </ContactItemElement>
  );
};

export default ContactItem;
