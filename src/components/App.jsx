import styled from 'styled-components';
import { Button } from './Button/Button';
import { HiSearch, HiFilter, HiTemplate, HiCheckCircle } from 'react-icons/hi';
import { Box } from './Box/Box.styled';
import { AppBar } from './AppBar/AppBar';

const Text = styled.p`
  color: ${props => props.theme.colors.accent};
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fontSizes.l};
  padding: ${props => props.theme.space[4]}px;
`;

export const App = () => {
  return (
    <Box
      color="text"
      bg="primary"
      pt={4}
      width="1"
      align-items="center"
      border="normal"
      borderColor="accent"
      borderWidth="thick"
      position="relative"
      as="main"
    >
      <AppBar></AppBar>
      <Box
        color="text"
        bg="yellow"
        pt={2}
        width="0.5"
        display="flex"
        align-items="center"
        border="normal"
        borderColor="accent"
        as="section"
      >
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus,
          officiis?
        </Text>
      </Box>
      <Box mt={6} as="nav">
        <Button icon={HiSearch}>Search</Button>
        <Button icon={HiFilter}>Filter</Button>
        <Button icon={HiTemplate}>Show Modal</Button>
        <Button type="submit">Submit</Button>
      </Box>
    </Box>
  );
};
