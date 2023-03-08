import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm, Filter, ContactList } from 'components';
import {
  StyledContactsBox,
  StyledContainer,
  StyledWrapper,
} from './App.styled';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleInputChange = e => {
    setFilter(e.target.value.trim());
  };

  const addContact = data => {
    const newContact = {
      ...data,
      id: nanoid(10),
    };

    const isExistName = contacts
      .map(contact => contact.name.toLowerCase())
      .includes(newContact.name.toLowerCase());

    const message = `${newContact.name} is already in contacts`;

    isExistName ? alert(message) : setContacts([...contacts, newContact]);
  };

  const deleteContact = contactId => {
    const filteredContacts = contacts.filter(
      contact => contact.id !== contactId
    );
    setContacts(filteredContacts);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <StyledWrapper>
      <StyledContainer>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={addContact} />

        <StyledContactsBox>
          <h2>Contacts</h2>
          <Filter value={filter} onChange={handleInputChange} />
          <ContactList
            contacts={getVisibleContacts()}
            onDeleteContact={deleteContact}
          />
        </StyledContactsBox>
      </StyledContainer>
    </StyledWrapper>
  );
};
