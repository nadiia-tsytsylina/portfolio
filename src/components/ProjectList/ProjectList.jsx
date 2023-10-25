import { ProjectItem } from 'components/ProjectItem/ProjectItem';
import { List } from './ProjectList.styled';
import { projects } from 'data/projects';

export const ProjectList = () => {
  return (
    <List>
      {projects.map(project => {
        return <ProjectItem key={project.id} project={project} />;
      })}
    </List>
  );
};
