import { About } from 'components/About/About';
import { Home } from 'components/Home/Home';
import { Contacts } from 'components/Contacts/Contacts';
import { Projects } from 'components/Projects/Projects';
import { NavBar } from './NavBar/NavBar';
import { Container } from './styles.styled';

export const App = () => {
  return (
    <>
      <NavBar />
      <Container>
        <Home />
        <About />
        <Projects />
        <Contacts />
      </Container>
    </>
  );
};
