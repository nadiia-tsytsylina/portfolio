import { Title, Section } from './Projects.styled';
import { ProjectList } from 'components/ProjectList/ProjectList';

export const Projects = () => {
  return (
    <Section id="projects">
      <Title>Projects</Title>
      <ProjectList />
    </Section>
  );
};
