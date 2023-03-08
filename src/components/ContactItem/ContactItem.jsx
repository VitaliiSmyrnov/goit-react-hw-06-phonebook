import { StyledButton } from './ContactItem.styled';

export const ContactItem = ({ name, number, onDeleteContact }) => {
  return (
    <>
      <p>
        {name}: {number}
      </p>
      <StyledButton type="button" onClick={onDeleteContact}>
        Delete
      </StyledButton>
    </>
  );
};
