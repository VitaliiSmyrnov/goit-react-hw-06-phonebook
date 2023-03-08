import { StyledButton } from './ContactItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <>
      <p>
        {name}: {number}
      </p>
      <StyledButton type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </StyledButton>
    </>
  );
};
