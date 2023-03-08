import { useSelector } from 'react-redux';
import { ContactItem } from 'components';
import { getContacts, getFilter } from 'redux/contactsSlice';
import { StyledItem, StyledList } from './ContactList.styled';

const getVisibleContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );
};

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const visibleContacts = getVisibleContacts(contacts, filter);

  return (
    <StyledList>
      {visibleContacts.map(contact => (
        <StyledItem key={contact.id}>
          <ContactItem contact={contact} />
        </StyledItem>
      ))}
    </StyledList>
  );
};
