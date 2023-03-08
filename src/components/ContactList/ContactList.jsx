import PropTypes from 'prop-types';

import { ContactItem } from 'components';
import { StyledItem, StyledList } from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <StyledList>
      {contacts.map(({ id, name, number }) => (
        <StyledItem key={id}>
          <ContactItem
            name={name}
            number={number}
            onDeleteContact={() => onDeleteContact(id)}
          />
        </StyledItem>
      ))}
    </StyledList>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
