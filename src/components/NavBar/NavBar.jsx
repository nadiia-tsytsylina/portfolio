import {
  Container,
  Navigation,
  StyledLink,
  NameContainer,
  Name,
  Avatar,
} from './NavBar.styled';
import avatar from '../../assets/images/avatar.jpg';

export const NavBar = () => {
  return (
    <>
      <Container>
        <NameContainer>
          <Avatar src={avatar} alt="avatar" />
          <Name>Nadiia Tsytsylina</Name>
        </NameContainer>
        <Navigation>
          <StyledLink
            to="home"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            Home
          </StyledLink>
          <StyledLink
            to="about"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            About
          </StyledLink>
          <StyledLink
            to="projects"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            Projects
          </StyledLink>
          <StyledLink
            to="contacts"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            Contacts
          </StyledLink>
        </Navigation>
      </Container>
    </>
  );
};
