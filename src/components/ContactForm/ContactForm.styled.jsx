import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const StyledButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: ${p => p.theme.spacing(1)};

  margin-right: auto;
  margin-top: ${p => p.theme.spacing(3)};

  font-size: ${p => p.theme.fontSizes.xs};
  text-align: center;
  min-width: 90px;

  padding-left: ${p => p.theme.spacing(4)};
  padding-right: ${p => p.theme.spacing(4)};
  padding-top: ${p => p.theme.spacing(1)};
  padding-bottom: ${p => p.theme.spacing(1)};

  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.normal};
  background-color: ${p => p.theme.colors.background};
  transition: background-color ${p => p.theme.transitions.normal};

  :hover,
  :focus {
    background-color: ${p => p.theme.colors.accent};
  }

  box-shadow: ${p => p.theme.shadows.normal};
  cursor: pointer;
`;
