import { MENU_PATH } from 'constants/constants';
import { Title, Section } from './Projects.styled';
import { ProjectList } from 'components/ProjectList/ProjectList';

export const Projects = () => {
  return (
    <Section id={MENU_PATH.projects}>
      <Title>Projects</Title>
      <ProjectList />
    </Section>
  );
};
