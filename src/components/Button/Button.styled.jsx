import styled from 'styled-components';

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: ${props => props.theme.space[2]}px;
  margin: ${props => props.theme.space[0]}px;
  padding-top: ${props => props.theme.space[3]}px;
  padding-bottom: ${props => props.theme.space[3]}px;
  padding-left: ${props => props.theme.space[4]}px;
  padding-right: ${props => props.theme.space[4]}px;
  border: ${props => props.theme.borders.normal};
  border-radius: ${props => props.theme.radii.normal};
  background-color: ${props =>
    props.disabled ? props.theme.colors.muted : props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  cursor: pointer;
  &:hover:not(:disabled),
  &:focus:not(:disabled) {
    background-color: ${props => props.theme.colors.secondary};
  }
`;
