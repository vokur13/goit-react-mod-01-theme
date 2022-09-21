import styled from 'styled-components';

const Text = styled.p`
  color: ${props => props.theme.colors.accent};
  font-famile: ${props => props.theme.fonts.body};
`;

export const App = () => {
  return (
    <Text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores aperiam
      omnis eveniet numquam tenetur laudantium rem eum, laboriosam dolores
      voluptatum voluptate obcaecati dolore pariatur ipsum? Saepe ex quis at
      adipisci?
    </Text>
  );
};
