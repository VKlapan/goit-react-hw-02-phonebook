import { ContactItemElement, ItemContent } from './ContactItem.styled';

const ContactItem = ({ contact }) => {
  const { name, number } = contact;

  return (
    <ContactItemElement>
      <ItemContent>{name}</ItemContent>
      <ItemContent>{number}</ItemContent>
      <button> DELETE</button>
    </ContactItemElement>
  );
};

export default ContactItem;
