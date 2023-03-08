import styled from 'styled-components';

export const StyledWrapper = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-size: ${p => p.theme.fontSizes.sm};
  color: ${p => p.theme.colors.text};
  background-color: ${p => p.theme.colors.background};
`;

export const StyledContainer = styled.div`
  width: 400px;
  padding: ${p => p.theme.spacing(5)};

  background-color: ${p => p.theme.colors.secondary};
  box-shadow: ${p => p.theme.shadows.normal};
  border-radius: ${p => p.theme.radii.md};

  input {
    margin-left: ${p => p.theme.spacing(3)};
    margin-top: ${p => p.theme.spacing(3)};
  }
`;

export const StyledContactsBox = styled.div`
  margin-top: ${p => p.theme.spacing(8)};
`;
