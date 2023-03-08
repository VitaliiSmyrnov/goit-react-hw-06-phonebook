import styled from 'styled-components';

export const StyledButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: ${p => p.theme.spacing(1)};

  font-size: ${p => p.theme.fontSizes.xs};
  min-width: 90px;
  text-align: center;

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
