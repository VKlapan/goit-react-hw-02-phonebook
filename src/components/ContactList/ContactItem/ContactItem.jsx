const ContactItem = ({ contact }) => {
  const { name, number } = contact;
  console.log(contact);

  return (
    <li>
      <span>{name}</span>
      <span>{number}</span>
    </li>
  );
};

export default ContactItem;
