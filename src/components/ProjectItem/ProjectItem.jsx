import { nanoid } from 'nanoid';
import { LuGithub, LuArrowUpRightSquare, LuSettings } from 'react-icons/lu';
import {
  Title,
  Image,
  Item,
  DescrContainer,
  TechList,
  TechItem,
  Description,
  LinkList,
  Link,
} from './ProjectItem.styled';

export const ProjectItem = ({ project }) => {
  return (
    <Item>
      <Image src={project.img} alt={project.title} />
      <DescrContainer>
        <Title>{project.title}</Title>
        <TechList>
          {project.technologies.map(technology => {
            return <TechItem key={nanoid()}>{technology}</TechItem>;
          })}
        </TechList>
        <Description>{project.description}</Description>
        <LinkList>
          <li>
            <Link rel="noreferrer noopener" target="_blank" href={project.demo}>
              Demo <LuArrowUpRightSquare />
            </Link>
          </li>
          {project.github && (
            <li>
              <Link
                rel="noreferrer noopener"
                target="_blank"
                href={project.github}
              >
                Github
                <LuGithub />
              </Link>
            </li>
          )}
          {project.backend && (
            <li>
              <Link
                rel="noreferrer noopener"
                target="_blank"
                href={project.backend}
              >
                Backend <LuSettings />
              </Link>
            </li>
          )}
          {project.landing && (
            <li>
              <Link
                rel="noreferrer noopener"
                target="_blank"
                href={project.landing}
              >
                Landing <LuArrowUpRightSquare />
              </Link>
            </li>
          )}
        </LinkList>
      </DescrContainer>
    </Item>
  );
};
