import styled from 'styled-components';

export const StyledList = styled.ul`
  margin-top: ${p => p.theme.spacing(4)};
`;

export const StyledItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-top: ${p => p.theme.spacing(2)};
  padding-bottom: ${p => p.theme.spacing(2)};
`;
