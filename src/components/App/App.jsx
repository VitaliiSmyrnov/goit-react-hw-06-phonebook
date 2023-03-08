import { Toaster } from 'react-hot-toast';
import { ContactForm, Filter, ContactList } from 'components';
import {
  StyledContactsBox,
  StyledContainer,
  StyledWrapper,
} from './App.styled';

export const App = () => {
  return (
    <StyledWrapper>
      <StyledContainer>
        <h1>Phonebook</h1>
        <ContactForm />

        <StyledContactsBox>
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </StyledContactsBox>
      </StyledContainer>

      <Toaster />
    </StyledWrapper>
  );
};
